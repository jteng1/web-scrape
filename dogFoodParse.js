const rp = require("request-promise");
const cheerio = require("cheerio");

const dogFoodParse = url => {
  return rp(url)
    .then(html => {
      const $ = cheerio.load(html);
      const searchResult = $(".SearchResult");
      const foodName = searchResult.find("h1 > label").text();
      const edibleDetail = searchResult.find(".firstPSearch > label").text();
      const foodDetail = searchResult.find("p:nth-child(4) > label").text();
      var edibility;

      // Check first word of edible to determine whether or not something can be eaten
      // 0 = not edible, 1 = edible, 2 = caution
      switch (edibleDetail.split(" ")[0]) {
        case "This":
          edibility = 1;
          break;
        case "WARNING!":
          edibility = 2;
          break;
        case "STOP!":
          edibility = 0;
      }
      var foodData = {
        foodName: foodName,
        edibile: edibility,
        edibleDetails: edibleDetail,
        foodDetails: foodDetail,
        imgUrl: null,
        saves: 0,
        comments: []
      };
      return foodData;
    })
    .catch(err => {
      //handle error
    });
};

module.exports = dogFoodParse;
