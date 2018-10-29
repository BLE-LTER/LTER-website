# LTER-website

Static HTML website for Long Term Ecological Research site

This project contains an example [Long Term Ecological Research](https://lternet.edu/) (LTER) site website which aims to satisfy LTER website guidelines. The website is implemented as static HTML which can be hosted for free using services like [Netlify](https://www.netlify.com/).

# Features

* Responsive design and navigation bar using Bootstrap 4.0.0
* Local site search using [Lunr](https://github.com/twhiteaker/Lunr-Index-and-Search-for-Static-Sites)
* Progressive Web App (though not that useful for us presently)
* https://simplesharingbuttons.com/ for sharing buttons

# About this pile of files

`build_index.js` is used to build the search index. It is modified from https://github.com/twhiteaker/Lunr-Index-and-Search-for-Static-Sites. Using node.js, you would run `build_index.js` after every time you updated site content to rebuild the search index, and copy the resulting `lunr_index.js` into the `public/js` folder.

`apply_template.js` is used to update the header or footer for all HTML files from a template file. 

[RealFaviconGenerator](https://realfavicongenerator.net/) was used to create the various icons and browserconfig.xml. To make your own icons, I suggest starting with a single image file 512x512 pixels in size.

`robots.txt` tells search engines to index all pages.  `humans.txt` is for someone to read if they want to look at the source files behind the website.

`google1b139a0c8d361fbe.html` tells Google that I own this website. I need to figure out how to include that on the CDN host without forcing it to be in GitHub, since I do not want to own the site of anyone who forks this repo.

`sitemap.xml` helps Search Engines index the site.

`sw.js` is the service worker that enables this website to be a [Progressive Web App (PWA)](https://developers.google.com/web/progressive-web-apps/). That means it can be pinned to your desktop or home screen, and some caching of resources locally is enabled which permits limited offline use. 

You'll notice multiple sizes for images in the img folder. Using a `picture` tag in the HTML, we tell a browser to only load the image size it needs, saving bandwidth and boosting performance.  I use tools like [toolur](http://compressimage.toolur.com/) and [Optimizilla](http://optimizilla.com/) to compress images.
