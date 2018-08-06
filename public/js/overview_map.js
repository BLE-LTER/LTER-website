"use strict";

var _layer = [];

$(document).ready(function(){
    var features = {
       "type": "FeatureCollection",
       "features": [
      {
        "type": "Feature",
        "geometry": {
           "type": "Point",
           "coordinates":  [ -156.44,71.33 ]
        },
        "properties": {
        "Name":"Elson Lagoon West",
        "IsLagoon":"y",
        "Comments":"Elson Lagoon is the largest lagoon in the Beaufort Sea and exhibits significant coastal erosion."
        }
      },
      {
        "type": "Feature",
        "geometry": {
           "type": "Point",
           "coordinates":  [ -156.13,71.29 ]
        },
        "properties": {
        "Name":"Elson Lagoon East",
        "IsLagoon":"y",
        "Comments":"Elson Lagoon is separated into eastern and western sections to improve coverage of this relatively large system."
        }
      },
      {
        "type": "Feature",
        "geometry": {
           "type": "Point",
           "coordinates":  [ -149.38,70.52 ]
        },
        "properties": {
        "Name":"Simpson Lagoon",
        "IsLagoon":"y",
        "Comments":"Simpson Lagoon waters freeze in winter to about two meters, locking 90% of the lagoon volume in ice."
        }
      },
      {
        "type": "Feature",
        "geometry": {
           "type": "Point",
           "coordinates":  [ -148.03,70.36 ]
        },
        "properties": {
        "Name":"Stefansson Sound",
        "IsLagoon":"y",
        "Comments":"Stefansson Sound has the only known kelp bed community on the Alaskan Arctic coast north of the Bering Strait."
        }
      },
      {
        "type": "Feature",
        "geometry": {
           "type": "Point",
           "coordinates":  [ -143.59,70.11 ]
        },
        "properties": {
        "Name":"Kaktovik Lagoon",
        "IsLagoon":"y",
        "Comments":"Kaktovik Lagoon has limited freshwater input and relatively limited connectivity to the Beaufort Sea."
        }
      },
      {
        "type": "Feature",
        "geometry": {
           "type": "Point",
           "coordinates":  [ -143.43,70.11 ]
        },
        "properties": {
        "Name":"Jago Lagoon",
        "IsLagoon":"y",
        "Comments":"Jago Lagoon receives direct freshwater input from the Jago River and has relatively broad connectivity to the Beaufort Sea."
        }
      }
    ]
    }

    var map = L.map('map');
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2hpdGVha2VyIiwiYSI6ImNqZm9kaWJtbjAwYmszNG93bHdvaHpiemYifQ.Z0xNGGp5cnR_Xtw_e4ZL1A', {
        maxZoom: 18,
        id: 'mapbox.satellite-streets',
        attribution: '© <a href="http://mapbox.com">Mapbox</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> © <a href="https://www.digitalglobe.com/">DigitalGlobe</a>'
    }).addTo(map);
    var geojsonMarkerOptions = {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    var layer = L.geoJSON(features, {
      pointToLayer: function(feature, latlng) {
        switch(feature.properties.IsLagoon) {
            case 'y': return L.marker(latlng, geojsonMarkerOptions);
            case 'n': return L.circleMarker(latlng, geojsonMarkerOptions);
        }
      },
      style: function(feature) {
        switch(feature.properties.IsLagoon) {
            case 'n': return {fillColor: "Maroon"};
        }
      },
      onEachFeature: function(feature, layer) {
        if (feature.properties && feature.properties.Comments) {
            layer.bindPopup(feature.properties.Comments);
        }
        _layer.push(feature);
      }
    }).addTo(map);
    map.fitBounds(layer.getBounds().pad(0.1));
});
