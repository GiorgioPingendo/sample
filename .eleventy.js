// const pluginPingendo = require("pingendo-11ty");


module.exports = function(eleventyConfig) {
  eleventyConfig.setEjsOptions({
    openDelimiter: "{{",
    closeDelimiter: "}}"
  });
  // eleventyConfig.addPlugin(pluginPingendo);
  
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setDynamicPermalinks(true);


  eleventyConfig.addExtension("new", {
    // the file extension that the compiled output will get
    outputFileExtension: "new",
  
    // create a compiler for the provided file.
    // optional if you provide an extension Eleventy already supports for the `extension` parameter above.
    async compile(content, inputPath) {
      // this.config is your eleventyConfig object
      return function (data) {
        console.log("data ",data)
        // data is the merged data object to pass to the template.
        // this.defaultRenderer is the default renderer for the file type, if there is one
        return "<html>..222.</html>"
      }
    },
  
    // [optional] called before this template language is first used
    init() {
      // this.config is your eleventyConfig object
    },
  
    // [optional] provide data for your file (such as from front matter):
    // either specify a function that returns the data directly...
    async getData(inputPath) { /* ... */ },
    // or, specify a list of data keys, and `getInstanceFromInputPath`:
    getData: true, // equivalent to ["data"]
    getData: ["key1", "key2", "key3"], // only the keys you specify will be available to the template
    async getInstanceFromInputPath(inputPath) {
      return {
        // ... return data here. Values can be either the value itself, a promise, or a function that returns either of those.
  
        // optional, overrides the value of `getData`:
        // (must be an array or other iterable if present)
        eleventyDataKey: ["key1", "key2", "key3"]
      }
    },
    
    // [optional] disable reading from the file (resulting in a `null` value for `content` in the `compile` method)
    // (you might do this if the template engine you’re providing handles reading files itself)
    read: true
  })

  eleventyConfig.setTemplateFormats([
    "ejs",
    "md",
    "js",
    "html",
    "yml",
    "new",
    "jpg",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);

1
  return {
    templateFormats: [
      "ejs",
      "md",
      "njk",
      "new",
      "html",
      "liquid",
    ],
    passthroughFileCopy: true,
    markdownTemplateEngine: "ejs",
    htmlTemplateEngine: "ejs",
    dataTemplateEngine: "ejs",
    dir: {
      input: ".",
      includes: "src/_includes"
    }
  };

}


