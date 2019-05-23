const dogFoodParse = require("./dogFoodParse");
const createList = require("./listOfFood");

// Get search terms to add onto url
const searchTerms = createList();

// Connection URL
const url = "mongodb://localhost:27017/";

// Create a client to connect to mongo service
const MongoClient = require("mongodb").MongoClient;

// Database Name
const dbName = "dog-food";

const dogFoodScrape = () => {
  Promise.all(
    searchTerms.map(searchTerm => {
      return dogFoodParse(
        "http://whatcandogseat.com/Search/Search?item=" + searchTerm
      );
    })
  ).then(foods => {
    // Make client connect to mongo service
    MongoClient.connect(url, function(err, client) {
      if (err) throw err;
      console.log("Connected successfully to the server");
      const db = client.db(dbName);

      // Insert multiple documents to 'foods' collection using insertMany
      db.collection("foods").insertMany(foods, function(err, res) {
        if (err) throw err;
        console.log(res.insertedCount + " documents inserted");

        // Close connection after insert
        client.close();
      });
    });
  });
};

dogFoodScrape();
