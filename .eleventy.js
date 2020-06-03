module.exports = {
    templateFormats: ["html", "liquid", "njk"]
};

module.exports = function(eleventyConfig) {
  // Output directory: public/_site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("public/img");

  // Tell 11ty to copy over these file extensions
  eleventyConfig.setTemplateFormats("html,liquid,njk,jpg,png,svg,mp4,css");
  
};