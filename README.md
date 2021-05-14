# LTER-website

Static HTML website for Long Term Ecological Research site

This project contains an example [Long Term Ecological Research](https://lternet.edu/) (LTER) site website which aims to satisfy LTER website guidelines. The website is implemented as static HTML which can be hosted for free using services like [Netlify](https://www.netlify.com/).

## Features

* Responsive design and navigation bar using Bootstrap
* Bibliography database using Zotero
* Dataset search using [PASTA](https://github.com/BLE-LTER/PASTA-JavaScript-Search-Client)
* Site search using [Algolia](https://github.com/algolia/algoliasearch-netlify)
* Progressive Web App (though not that useful for us presently)
* https://simplesharingbuttons.com/ for sharing buttons

## About this pile of files

`apply_template.js` is used to update the header or footer for all HTML files
from a template file. See more about templates below.

`harvest_zotero.js` is used to update the cached bibliography from a Zotero collection. Run this script via Node.js when your Zotero collection has been updated.

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

## Creating Icons

[RealFaviconGenerator](https://realfavicongenerator.net/) was used to create the various icons and browserconfig.xml. To make your own icons, I suggest starting with a single image file 512x512 pixels in size.  

You'll probably want to manually edit favicon-16x16.png and favicon-32x32.png, or else they may look blurry when rescaled from 512x512.  You'll also want to edit favicon.ico (Chrome uses this, for example) since it includes those smaller sizes embedded within it. If you don't already have an editor which handles *.ico files, try [redketchup's Icon Editor](https://redketchup.io/icon-editor) as it lets you upload the 16x16 and 32x32 images that you just manually created, to replace those sizes in favicon.ico.

## Background Videos

For videos played in the background, you need to:

1. Make sure the video looks good at various window sizes including those for mobile devices. Basically this means the interesting content shouldn't be only on the sides of the video.
2. Remove audio.
3. Trim it to just the quality content.
4. Make it as small as possible.
5. Extract the first frame as an image to use while the video is loading in a browser.

You can accomplish this to a basic degree using a Windows 10 software stack.

### Editing videos using basic Windows 10 software

To remove audio:

1. Use https://www.audioremover.com/ to remove the audio.

To trim and make small:

1. Right-click the resulting video in File Explorer, point to Open with, and click Photos.
2. Click Edit & Create > Trim.
3. Trim the video and click Save as.  The Photos app doesn't save at a high bitrate, so you'll likely also reduce file size in this step.  You have no control over this.

To extract the first frame:

1. Right-click the resulting video in File Explorer, point to Open with, and click Photos.
2. Click Edit & Create > Save photos.
3. Move the slider to the beginning of the video.
4. Click Save a photo.

### Editing videos using downloaded software

For more control over the output bitrate, or to add effects such as filters, overlays, and subtitles, you'll need to install video editing software.  Tim tested a few and likes the free and open-source cross-platform Shotcut.  For tips on reducing bitrate by tweaking Shotcut's many output options, see this [Reddit thread on encoding](https://www.reddit.com/r/shotcut/comments/4hxsi3/encoding_help/).
The key tip was to customize the average bitrate. Tim tried 512 kbps, and this resulted in a file of size 3.9 MB, compared to size 4.8 MB using the basic Windows workflow. The original file size for Tim's test was 16.6 MB.  The right value depends on the video, as you may want to preserve more quality in some videos.

Basic Shotcut procedure to export video:

1. View the Details tab of the video properties in File Explorer to see the video dimensions, bitrate, and frame rate.
2. Open video with Shotcut and trim it.
3. Click Export.
4. Select the Stock > H.264 High Profile preset.
5. Click Advanced.
6. On the Audio tab, disable audio.
7. On the Codec tab, in the Rate control box, choose Average bitrate.
8. Choose an average bitrate. Try 512 kb/s and go from there.
9. Click Export File.

Tim says no to these programs, mostly because he couldn't figure out how to effectively reduce bitrate:

* Lightworks
* Avidemux
* HitFilm Express

## Deployment on Netlify

BLE uses Netlify for free hosting.

A nice feature of Netlify is live previews of branches and pull requests. To see a preview of a branch, input the branch name, two dashes, and then your raw Netlify URL, which is `eager-sammet-b7ed61.netlify.com/` for BLE. For example, if a branch is called `cool-stuff`, the URL would be `https://cool-stuff--eager-sammet-b7ed61.netlify.com/`.

## Site search by Algolia

Here we document the nitty gritties of Algolia search on our website. 

#### Why we like it

We use it because of (1) automatic re-indexing triggered with every deployment of our website (a.k.a every push to the Github repository), (2) their instant search and fuzzy search feature.

#### How to make it work

First, go to https://github.com/algolia/algoliasearch-netlify/blob/master/docs/GettingStarted.md and read their getting started guide.

These are steps we need to do.

(1) Set up and indexing
- Install the Algolia plugin for Netlify. Note that this is done not on the Netlify GUI, but on a different website specifically for Algolia X Netlify. Follow the link and directions in the Github guide. You will need the appropriate Netlify login.
- Link up Algolia with the Netlify site you want. This is again done in the Algolia x Netlify site.
- Modify the Algolia plugin settings in the Netlify config file "netlify.toml". One finds this in the base directory of the website git repo. See https://github.com/algolia/algoliasearch-netlify/tree/master/plugin#available-parameters for the available parameters. The ones I've found most relevant: 
	- "pathPrefix". This should be the same as the Netlify "publish" directory, which in our case is "/public".
	- "customDomain". This matters a lot if you are on a fork or a branch, which means the URL you're checking is not our canonical ble.lternet.edu referred to in the sitemap and in HTML header canonicals, and will lead to lots of indexing failures. In which case, set this to "ble.lternet.edu". No "https".
	- "branches". Algolia can create different indices for different branches on the git repo, but it needs to be told specifically which ones. If you're experimenting on a different branch other than master, say "['master', 'yourbranchname']" and delete the latter once merged into master.
	- "template". This determines how Algolia will break up the index records. There are two options as of 2021-01-21: "default" and "hierarchical". The former will index by page, the latter by headings within a page. We chose the latter, since our website has comparatively few pages but a lot of information within each page.
- Check out and make sure the indexing of the website contents is to satisfaction. To do this, trigger a deployment of the Netlify site. Generally a new commit to the git repo will accomplish this, so consider doing this on a branch. Or alternatively trigger a deployment manually in the Netlify GUI, since you're most likely logged in for most of this anyway. Under the deployment log, if Algolia and Netlify have been linked up correctly, the log will give you a URL to the crawler records. Follow the link and check out the records. The "successful" count should roughly be equal to the number of distinct pages we have, plus one for the sitemap. Don't worry about the "ignored" category; my understanding is that Algolia does the indexing based on our sitemap, and it will look for common sitemap naming schemes; whatever doesn't work go into "ignored". 

(2) Incorporate Algolia into front end 

- Algolia has a plug-and-play front-end and this is what we use. It looks great, although the search result panel has a small, unobstrusive Algolia logo. Not ideal, but not bad. There is the option to write one's own front end.

- Copy the snippet of info Algolia gives you once you've linked Netlify with Algolia. It will look something like this, with the IDs and API key identifying our site.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>

<script type="text/javascript">

  algoliasearchNetlify({

    appId: '',

    apiKey: '',

    siteId: '',

    branch: 'master',

    selector: 'div#search',

  });

</script>
```

- Double check to make sure the IDs and API key are correct and refer to the appropriate Netlify page. There are two API keys Algolia will give you, the searchAPI is ok to put in public code, and the other is super not ok. Make sure it's not the latter in the snippet. If you copy from the site that risk is minimal. 

- Double check that the "branch" param in the snippet says the correct branch(es). Yes, the branches need to be specified in both the `netlify.toml` file and here.

- Edit the selector if needed.

- In our page template (`templates/template.html` in base git directory), copy and paste the first line into the HTML header. Copy and paste the `<script>` tag into the "end of body" div we have for scripts. 

- Add the selector (the default case is a div with a "search" ID attribute) where you want a search box to go in the template. We normally have it on the navbar.

- Run `apply_template.js` to apply the template.

- Git commit and push to trigger deployment. Check out your handiwork and adjust if needed.

#### Misc. observations and notes

1. Formatting headers

A nice feature of the "hierarchical" indexing is that once users select a search result from the drop-down result panel, they will be taken directly to the corresponding section. This is pretty neat. To make this happen, the underlying markers need to be in HTML source code. 

This indexing by Algolia relies on headings (`<h1>` to `<h6>` HTML tags). Each heading will need to have its own ID attribute. E.g. `<h1 id="title"> title </h1>`.

Keep this in mind when adding content.
  
2. Internal "SEO"

Think about logical breaks in content so that headings (and therefore searchable "sections") can be strategically placed. What will users search for on our site? The spots where headings are customarily placed in a page are a good start.

3. Commitments and usage limits

The free tier we get with Algolia and Netlify allows for 20 monthly "commitments". According to their website, a commitment equals to 1000 searches and 1000 records. We are probably not in any danger, but it is something to look out for. 
Algolia will also send usage reports to the email address associated with the Netlify page. This report details keywords used and their frequencies, etc., and whether there were any keywords that resulted in no hits. This latter especially would be useful to think about new content or SEO.

4. CSS mods

There are two minor modifications in CSS I made; otherwise we lifted their front-end wholesale. 

- min-width for the class ".aa-Form" was set to 250px, originally 150px. This is the search box.
- position for the class ".aa-Panel" was set to fixed, so that the search results panel does not disappear once we scroll down the page. 
- both needed the !important declaration to override Algolia's styling.

## Accessibility features

To maintain WCAG compliance, pay attention to the following when updating the website:

- Add "aria-label" attributes to links that open in a new tab. This label should say what's opening, and that it's opening in a new tab. 
- If you're adding a section with a title of some sort, and using heading tags, pay attention to the hierarchy of headings already in the document. Consistency of headings dictate that (1) documents have one and only one h1 heading, and (2) the structure is consistent, and (3) text that stylistically appear as headers (bolded, large size) should actually be headers and make sense that way (i.e. don't apply styles to paragraph text that make them appear to be headers, font-weight is an especially important property here). 
