# LTER-website

Static HTML website for Long Term Ecological Research site

This project contains an example [Long Term Ecological Research](https://lternet.edu/) (LTER) site website which aims to satisfy LTER website guidelines. The website is implemented as static HTML which can be hosted for free using services like [Netlify](https://www.netlify.com/).

## Features

* Responsive design and navigation bar using Bootstrap
* Bibliography search using
  [Zotero](https://github.com/BLE-LTER/Zotero-JavaScript-Search-Client)
* Dataset search using [PASTA](https://github.com/BLE-LTER/PASTA-JavaScript-Search-Client)
* Local site search using [Lunr](https://github.com/BLE-LTER/Lunr-Index-and-Search-for-Static-Sites)
* Progressive Web App (though not that useful for us presently)
* https://simplesharingbuttons.com/ for sharing buttons

## About this pile of files

`build_index.js` is used to build the search index. It is modified from https://github.com/twhiteaker/Lunr-Index-and-Search-for-Static-Sites. Using node.js, you would run `build_index.js` after every time you updated site content to rebuild the search index, and copy the resulting `lunr_index.js` into the `public/js` folder.

`apply_template.js` is used to update the header or footer for all HTML files
from a template file. See more about templates below.

[RealFaviconGenerator](https://realfavicongenerator.net/) was used to create the various icons and browserconfig.xml. To make your own icons, I suggest starting with a single image file 512x512 pixels in size.

`robots.txt` tells search engines to index all pages.  `humans.txt` is for someone to read if they want to look at the source files behind the website.

`google1b139a0c8d361fbe.html` tells Google that I own this website. I need to figure out how to include that on the CDN host without forcing it to be in GitHub, since I do not want to own the site of anyone who forks this repo.

`sitemap.xml` helps Search Engines index the site.

`sw.js` is the service worker that enables this website to be a [Progressive Web App (PWA)](https://developers.google.com/web/progressive-web-apps/). That means it can be pinned to your desktop or home screen, and some caching of resources locally is enabled which permits limited offline use.

You'll notice multiple sizes for images in the img folder. Using a `picture` tag in the HTML, we tell a browser to only load the image size it needs, saving bandwidth and boosting performance.  I use tools like [toolur](http://compressimage.toolur.com/) and [Optimizilla](http://optimizilla.com/) to compress images.

## Applying Templates

The `apply_template.js` script looks for certain parts of HTML files in the
`public` folder and replaces them with parts from a template.  For example, this enables you
to update all pages if you add a new menu item to the navigation bar.  For this
sript to work, you must include elements exactly as follows:

* **head** - For common parts of the `<head>` element, such as links to external
  stylesheets, enclose those parts between `<!-- Start Common Head -->` and
  `<!-- End Common Head -->` comments.
* **header** - Use HTML `<header>` element. This is where your navigation bar goes.
* **footer** - Use HTML `<footer>` element. This is where your footer goes.
* **before end of body** - This is where you'll often load scripts instead of
  `<head>` so that the scripts don't block loading of the body. Enclose such
  scripts within a `<div>` element with id `before-end-of-body`, as in `<div
  id="before-end-of-body"><script async src="js/app.js"></script></div>`.

To apply a template, edit `apply_template.js` so that the `TEMPLATE` constant is
pointing to the desired template. Then start a Node command prompt and run `node
apply_template.js`. This script requires [Node.js](https://nodejs.org/en/download/) and [cheerio](https://github.com/cheeriojs/cheerio).