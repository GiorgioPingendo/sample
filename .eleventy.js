// const pluginPingendo = require("pingendo-11ty");

module.exports = function(eleventyConfig) {


  eleventyConfig.setEjsOptions({
    openDelimiter: "{{",
    closeDelimiter: "}}"
  });
  // eleventyConfig.addPlugin(pluginPingendo);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setDynamicPermalinks(true);
  eleventyConfig.setTemplateFormats([
    "ejs",
    "md",
    "js",
    "html",
    "yml",
    "jpeg",
    "jpg",
    "png",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);


  return {
    templateFormats: [
      "ejs",
      "md",
      "njk",
      "html",
      "liquid",
    ],
    passthroughFileCopy: true,
    markdownTemplateEngine: "ejs",
    htmlTemplateEngine: "ejs",
    dataTemplateEngine: "ejs",
    dir: {
      input: "./src", // "sito gali  : ./src"
      includes: "_includes"
    }
  };

}
