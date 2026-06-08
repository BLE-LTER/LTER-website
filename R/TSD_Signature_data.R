#
# Processing script for an update to BLE LTER dataset ID 3
# This script is generated from a template housed under the R package bleutils
# with dataset-specific additions

# Setup

setwd(here::here())

library(EML)
library(MetaEgress)
library(bleutils)
library(dplyr)
library(lubridate)
library(jsonlite)
library(tidyr)
library(purrr)
library(tibble)

# get metadata from metabase
# type in username and password in the R console
metadata <- append_units(get_meta(
  dbname = "ble_metabase",
  dataset_ids = 3,
  host = "10.157.18.158"
))

# Establish data folders
frompi <- file.path(getwd(), "..", "FromPI")

# get latest subfolder in frompi
y <- list.dirs(frompi)[[length(list.dirs(frompi))]]

# frompi is set to latest subfolder in frompi
frompi <- file.path(frompi, basename(y))
clean <- file.path(getwd(), "..", "Clean")

# get newest revision number
rev <- max(as.integer(
  EDIutils::list_data_package_revisions("knb-lter-ble", 3)
))

pkg_id <- paste0("knb-lter-ble.", 3, ".", rev)

# get entity names
entity_names <- EDIutils::read_data_entity_names(packageId = pkg_id)

# process YSI data
grab <- 1
url <- EDIutils::read_data_package(pkg_id)[[grab]]
infile <- tempfile()
try(download.file(url, infile, method = "curl"))

prev_data <- data.table::fread(
  infile,
  colClasses = list(character = c("date_time", "flags_condsal"))
)

# convert datetime and add year/date
prev_data <- prev_data %>%
  mutate(
    date_time = ymd_hms(date_time),
    year = year(date_time),
    date = as.Date(date_time)
  )

# Daily averages first
ctd_daily_base <- prev_data %>%
  filter(!is.na(date_time), !is.na(station)) %>%
  mutate(
    sample_date = as.Date(date_time),
    year = year(date_time)
  ) %>%
  group_by(year, sample_date, station) %>%
  summarise(
    temperature_C = mean(temperature_C, na.rm = TRUE),
    
    salinity = {
      vals <- salinity[
        !is.na(flags_condsal) &
          flags_condsal != "INV"
      ]
      
      if (length(vals) == 0 || all(is.na(vals))) {
        NA_real_
      } else {
        mean(vals, na.rm = TRUE)
      }
    },
    
    depth_m = mean(depth_m, na.rm = TRUE),
    
    flags_condsal = case_when(
      any(is.na(flags_condsal)) ~ "MISSING",
      any(flags_condsal == "INV", na.rm = TRUE) ~ "INV",
      any(flags_condsal == "QM", na.rm = TRUE) ~ "QM",
      TRUE ~ "OK"
    ),
    
    has_qm_condsal = any(flags_condsal == "QM", na.rm = TRUE),
    
    .groups = "drop"
  )

# Create full Jan-Dec date grid for every year and station
date_grid <- ctd_daily_base %>%
  distinct(year, station) %>%
  rowwise() %>%
  mutate(
    sample_date = list(seq.Date(
      from = as.Date(paste0(year, "-01-01")),
      to = as.Date(paste0(year, "-12-31")),
      by = "day"
    ))
  ) %>%
  tidyr::unnest(sample_date) %>%
  ungroup()

# Join daily data onto full grid
# Missing dates remain NA, which become null in JSON.
# Plotly can use those null values to create gaps in the line.
ctd_daily <- date_grid %>%
  left_join(
    ctd_daily_base,
    by = c("year", "sample_date", "station")
  ) %>%
  mutate(
    date = format(sample_date, "%Y-%m-%d"),
    flags_condsal = if_else(is.na(flags_condsal), "MISSING", flags_condsal),
    has_qm_condsal = if_else(is.na(has_qm_condsal), FALSE, has_qm_condsal)
  ) %>%
  select(
    year,
    date,
    station,
    temperature_C,
    salinity,
    depth_m,
    flags_condsal,
    has_qm_condsal
  )

write_json(
  ctd_daily,
  file.path(clean, "ctd_data.json"),
  auto_unbox = TRUE
)

# -------------------------------------
# Create station lookup JSON separately
# -------------------------------------
stations_lookup <- prev_data %>%
  select(station, station_name, latitude, longitude) %>%
  distinct() %>%
  filter(
    !is.na(station),
    !is.na(station_name),
    !is.na(latitude),
    !is.na(longitude)
  ) %>%
  arrange(station)

stations_list <- stations_lookup %>%
  mutate(
    station_info = purrr::pmap(
      list(station_name, latitude, longitude),
      function(station_name, latitude, longitude) {
        list(
          name = station_name,
          latitude = latitude,
          longitude = longitude
        )
      }
    )
  ) %>%
  select(station, station_info) %>%
  deframe()

write_json(
  stations_list,
  file.path(clean, "stations.json"),
  pretty = TRUE,
  auto_unbox = TRUE
)