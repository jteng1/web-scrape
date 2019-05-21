const dogFoodParse = require("./dogFoodParse");
const createList = require("./listOfFood");
const searchTerms = createList();

const dogFoodScrape = () => {
  Promise.all(
    searchTerms.map(searchTerm => {
      return dogFoodParse(
        "http://whatcandogseat.com/Search/Search?item=" + searchTerm
      );
    })
  ).then(foods => {
    console.log(foods);
  });
};

dogFoodScrape();
