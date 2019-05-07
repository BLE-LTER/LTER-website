// Overwrites navigation and footer for all pages

var path = require("path");
var fs = require("fs");
var cheerio = require("cheerio");


// Change these constants to suit your needs
const HTML_FOLDER = path.join(__dirname, 'public');; // folder with your HTML files
const EXCLUDE_FILES = ["google1b139a0c8d361fbe.html"];
const TEMPLATE = "templates/template.html"; // template file


function isHtml(filename) {
   lower = filename.toLowerCase();
   return (lower.endsWith(".htm") || lower.endsWith(".html"));
}


function findHtml(folder) {
   if (!fs.existsSync(folder)) {
      console.log("Could not find folder: ", folder);
      return;
   }

   var files = fs.readdirSync(folder);
   var htmls = [];
   for (var i = 0; i < files.length; i++) {
      var filename = path.join(folder, files[i]);
      var stat = fs.lstatSync(filename);
      if (stat.isDirectory()) {
         var recursed = findHtml(filename);
         for (var j = 0; j < recursed.length; j++) {
            recursed[j] = path.join(files[i], recursed[j]).replace(/\\/g, "/");
         }
         htmls.push.apply(htmls, recursed);
      } else if (isHtml(filename) && !EXCLUDE_FILES.includes(files[i])) {
         htmls.push(files[i]);
      };
   };
   return htmls;
};


// Splits html around common header area
function splitForHead(htmlTxt) {
   const START_COMMENT = "<!-- Start Common Head -->";
   const END_COMMENT = "<!-- End Common Head -->";
   var stop1 = htmlTxt.indexOf(START_COMMENT) + START_COMMENT.length;
   var stop2 = htmlTxt.indexOf(END_COMMENT);
   var beforeIt = htmlTxt.slice(0, stop1);
   var it = htmlTxt.slice(stop1, stop2);
   var afterIt = htmlTxt.slice(stop2);
   return [beforeIt, it, afterIt];
}


function readTemplate() {
   var filename = path.join(__dirname, TEMPLATE);
   var txt = fs.readFileSync(filename).toString();
   var $ = cheerio.load(txt);
   var header = $("body").find("header").eq(0);
   var footer = $("body").find("footer").eq(0);
   var end_of_body = $("#before-end-of-body");
   var template = {
      "head": splitForHead(txt)[1],
      "header": header,
      "footer": footer,
      "end_of_body": end_of_body
   }
   return template;
}


function updateHead(htmlTxt, template) {
   parts = splitForHead(htmlTxt);
   return parts[0] + template.head + parts[2];
}


function updateHtml(root, file, template) {
   var filename = path.join(root, file);
   var txt = fs.readFileSync(filename).toString();
   txt = updateHead(txt, template);
   var $ = cheerio.load(txt);
   var header = $("body").find("header").eq(0);
   var footer = $("body").find("footer").eq(0);
   var end_of_body = $("#before-end-of-body");
   header.replaceWith(template.header);
   footer.replaceWith(template.footer);
   end_of_body.replaceWith(template.end_of_body);

   fs.writeFile(filename, $.html(), function (err) {
      if (err) {
         return console.log(err);
      }
      console.log("Saved " + filename);
   });
}


function main() {
   files = findHtml(HTML_FOLDER);
   template = readTemplate();
   console.log("Updating these files:");
   for (var i = 0; i < files.length; i++) {
      console.log("    " + files[i]);
      updateHtml(HTML_FOLDER, files[i], template);
   }
}

main();