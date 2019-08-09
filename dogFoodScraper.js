const dogFoodParse = require('./dogFoodParse');
const createList = require('./listOfFood');

// Get search terms to add onto url
const searchTerms = createList();

// Connection URL
const uri =
  'mongodb+srv://username:password@cluster0-g3jby.mongodb.net/test?retryWrites=true&w=majority';

// Create a client to connect to mongo service
const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, { useNewUrlParser: true });

// Database Name
const dbName = 'dog-food';

// Connect to local MongoDB server
const dogFoodScrapeLocal = () => {
  Promise.all(
    searchTerms.map(searchTerm => {
      return dogFoodParse(
        'http://whatcandogseat.com/Search/Search?item=' + searchTerm
      );
    })
  ).then(foods => {
    // Make client connect to mongo service
    MongoClient.connect(uri, function(err, client) {
      if (err) throw err;
      console.log('Connected successfully to the server');
      const db = client.db(dbName);

      // Insert multiple documents to 'foods' collection using insertMany
      db.collection('foods').insertMany(foods, function(err, res) {
        if (err) throw err;
        console.log(res.insertedCount + ' documents inserted');

        // Close connection after insert
        client.close();
      });
    });
  });
};

// Connect to MongoDB Atlas server
const dogFoodScrapeAtlas = () => {
  Promise.all(
    searchTerms.map(searchTerm => {
      return dogFoodParse(
        'http://whatcandogseat.com/Search/Search?item=' + searchTerm
      );
    })
  ).then(foods => {
    client.connect(err => {
      if (err) throw err;
      console.log('Connected successfully to the MongoDB Atlas server');
      const collection = client.db('dogfoods').collection('foods');

      // Perform actions on collection object
      collection.insertMany(foods, (err, res) => {
        if (err) throw err;
        console.log(res.insertedCount + ' documents inserted');
      });

      // Close connection after insert
      client.close();
    });
  });
};

dogFoodScrapeAtlas();
