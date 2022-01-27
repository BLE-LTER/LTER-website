// Required packages: node-fetch, moment

"use strict";

var fs = require("fs");
var fetch = require("node-fetch");
var moment = require('moment');

const ZOTERO_CONFIG = {
   "zotId": "2211939", // ID of group or user library to search in Zotero, e.g., 2211939, 2055673
   "zotIdType": "group", // group or user
   "collectionKey": "KHTHLKB5", // Key of collection within library to search, e.g., "KHTHLKB5", or "" if no collection
   "filterTags": "", // For filtering results by tag(s), e.g., "&tag=LTER-Funded".  See examples at https://www.zotero.org/support/dev/web_api/v3/basics
   "includeCols": ["Year", "Type", "ShowTags"], // Array of columns to include in the output table, other than Citation. The full set is ["Year", "Type", "ShowTags"]
   "showTags": ["Foundational", "LTER-Funded", "LTER-Enabled"], // Include a column showing this tag if present for each item
   "showTagColName": "Relationship", // Name for the column in HTML table under which the showTags will appear
   "style": "" // Bibliography display style, e.g., apa. Leave blank for default which is chicago-note-bibliography.
};

const OUT_FILE = "public/js/biblio-data.js";


function fetchChunk(uri) {
   console.log(uri);
   return new Promise(function (resolve, reject) {
      fetch(uri).then(function (response) {
         response.text().then(function (text) {
            resolve(JSON.parse(text));
         });
      });
   });
}


// Parse Zotero search results into HTML
function parseZoteroResults(results) {
   function parseDate(text) {
      const formats = [moment.ISO_8601, "YYYY-MM-DD", "M/D/YYYY", "MMMM YYYY", "MMMM DD YYYY", "MMMM D, YYYY", "YYYY/M/D", "MM YYYY", "MMM YYYY", "YYYY"];
      if (text) {
         const dateObj = moment(text, formats, true);
         if (dateObj.isValid()) {
            return '<span style="display: none;">' + dateObj.toISOString() + '</span>' + dateObj.year();
         } else {
            console.log("Could not parse date: " + text);
            return "";
         }
      } else {
         return "";
      }
   }

   function parseType(text) {
      switch (text) {
         case "artwork":
            return "Artwork";
         case "audioRecording":
            return "Audio Recording";
         case "bill":
            return "Bill";
         case "blogPost":
            return "Blog Post";
         case "book":
            return "Book";
         case "bookSection":
            return "Book Section";
         case "case":
            return "Case";
         case "computerProgram":
            return "Computer Program";
         case "conferencePaper":
            return "In Proceedings";
         case "dictionaryEntry":
            return "Dictionary Entry";
         case "document":
            return "Document";
         case "email":
            return "Email";
         case "encyclopediaArticle":
            return "Encyclopedia Article";
         case "film":
            return "Film";
         case "forumPost":
            return "Forum Post";
         case "hearing":
            return "Hearing";
         case "instantMessage":
            return "Instant Message";
         case "interview":
            return "Interview";
         case "journalArticle":
            return "Journal Article";
         case "letter":
            return "Letter";
         case "magazineArticle":
            return "Magazine Article";
         case "manuscript":
            return "Manuscript";
         case "map":
            return "Map";
         case "newspaperArticle":
            return "Newspaper Article";
         case "patent":
            return "Patent";
         case "podcast":
            return "Podcast";
         case "presentation":
            return "Presentation";
         case "radioBroadcast":
            return "Radio Broadcast";
         case "report":
            return "Report";
         case "statute":
            return "Statute";
         case "thesis":
            return "Thesis";
         case "tvBroadcast":
            return "TV Broadcast";
         case "videoRecording":
            return "Video Recording";
         case "webpage":
            return "Web Page";
         case "note":
            return "Note";
         default:
            return "Other"
      }
   }

   function parseShowTags(tags) {
      function objToString(tagObj) {
         return tagObj["tag"];
      }
      var tagArray = tags.map(objToString);
      var matches = tagArray.filter(function (n) {
         return ZOTERO_CONFIG["showTags"].indexOf(n) !== -1;
      });
      const text = matches.join(", ");
      // Use hidden text to enable sorting with LTER-Funded at the top
      let tagRank = "99";
      if (text.startsWith("LTER-Funded")) {
         tagRank = "1";
      } else if (text.startsWith("LTER-Enabled")) {
         tagRank = "2";
      } else if (text.startsWith("Foundational")) {
         tagRank = "3";
      }
      const span = '<span style="display: none;">' + tagRank + '</span>';
      return span + text;
   }

   function parseDataLinks(extra) {
      if (extra) {
         var dois = extra.split(/\r?\n/);
         var urls = [];
         for (var i = 0; i < dois.length; i++) {
            var doi = dois[i];
            if (doi.startsWith("https://doi.org/")) {
               urls.push(doi);
            }
         }
         var links = [];
         if (urls.length == 0) {
            return "";
         } else if (urls.length == 1) {
            links.push(' <a href="' + urls[0] + '" target="_blank" rel="noopener" aria-label="open data in new tab">Data link.</a>');
         } else {
            for (var i = 0; i < urls.length; i++) {
               var url = urls[i];
               var j = i + 1;
               links.push(' <a href="' + url + '" target="_blank" rel="noopener" aria-label="open data in new tab">Data link ' + j + '.</a>');
            }   
         }
         return links.join(" ");
      } else {
         return "";
      }
   }

   function parseItemLink(item) {
      if (item["DOI"]) {
         if (item["DOI"].startsWith("http")) {
            return '<a href="' + item["DOI"] + '" target="_blank" rel="noopener" aria-label="open item in new tab">Item link.</a>';
         } else {
            return '<a href="https://doi.org/' + item["DOI"] + '" target="_blank"  rel="noopener"  aria-label="open item in new tab">Item link.</a>';
         }
      } else if (item["url"])
         return '<a href="' + item["url"] + '" target="_blank" rel="noopener"  aria-label="open item in new tab">Item link.</a>';
      else
         return "";
   }

   let parsedResults = [];
   for (var i = 0; i < results.length; i++) {
      const result = results[i];
      const itemDate = (result["data"]["date"]) ? result["data"]["date"] : result["data"]["issueDate"];
      const pubDate = parseDate(itemDate);
      const itemType = parseType(result["data"]["itemType"]);
      const tagsToShow = parseShowTags(result["data"]["tags"]);
      const itemLink = parseItemLink(result["data"]);
      const dataLinks = parseDataLinks(result["data"]["extra"]);
      const item = {
         "Date": pubDate,
         "Citation": result["bib"] + itemLink + " " + dataLinks,
         "Type": itemType,
         "Relationship": tagsToShow
      }
      parsedResults.push(item);
   }
   return parsedResults;
}


function handleResults(resultSets) {
   let result = [];
   for (let i = 0; i < resultSets.length; i++) {
      result = result.concat(parseZoteroResults(resultSets[i]));
   }

   let js = "var biblioData = " + JSON.stringify(result) + ";"
   fs.writeFile(OUT_FILE, js, function (err) {
      if (err) {
         return console.log(err);
      }
      console.log("Bibliography data saved as " + OUT_FILE);
   });
}


function makeBaseUri() {
   function encodeStyle(style) {
      return style.replace(/\//g, '%3A').replace(/:/g, '%2F');
   }

   const zotId = (ZOTERO_CONFIG["zotIdType"] === "group") ? "groups/" + ZOTERO_CONFIG["zotId"] : "users/" + ZOTERO_CONFIG["zotId"];
   const collection = (ZOTERO_CONFIG["collectionKey"] === "") ? "" : "/collections/" + ZOTERO_CONFIG["collectionKey"];
   const base = "https://api.zotero.org/" + zotId + collection + "/items?v=3&include=bib,data";
   const params = "&itemType=-attachment || note&sort=date" + ZOTERO_CONFIG["filterTags"];
   const style = (ZOTERO_CONFIG["style"] === "") ? "" : "&style=" + encodeStyle(ZOTERO_CONFIG["style"]);
   return base + params + style;
}


function main() {
   const baseUri = makeBaseUri();
   const limit = 100; // 100 is max allowed for API if bib is returned
   let start = 0;

   // First call is just to get total result count
   let uri = baseUri + "&limit=1&start=" + start;
   fetch(uri).then(function (response) {
      const count = parseInt(response.headers.get("total-results"), 10);
      let promises = [];
      // Now make asynchronous calls until we fetched all results
      while (start < count) {
         uri = baseUri + "&limit=" + limit + "&start=" + start;
         let promise = fetchChunk(uri);
         promises.push(promise);
         start += limit;
      }
      // Results fetched. Now process them.
      Promise.all(promises).then(handleResults)
         .catch(console.error);
   });
}

main();