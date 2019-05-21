const rp = require("request-promise");
const cheerio = require("cheerio");

// Connection URL
const url = "mongodb://localhost:27017/";

// Create a client to connect to mongo service
const MongoClient = require("mongodb").MongoClient;

// Database Name
const dbName = "testdb";

// Make client connect to mongo service
MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("Connected successfully to the server");
  const db = client.db(dbName);

  // Documents to be inserted
  var docs = [
    { name: "Jack", age: "13" },
    { name: "John", age: "15" },
    { name: "Judy", age: "20" }
  ];

  // Insert multiple documents to 'foods' collection using insertMany
  db.collection("foods").insertMany(docs, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount + " documents inserted");

    // Close connection after insert
    client.close();
  });
});

// const testParse = url => {
//   return rp(url)
//     .then(html => {
//       const $ = cheerio.load(html);
//       const searchResult = $(".SearchResult");
//       const foodName = searchResult.find("h1 > label").text();
//       const edibleDetail = searchResult.find(".firstPSearch > label").text();
//       const foodDetail = searchResult.find("p:nth-child(4) > label").text();
//       var edibility;

//       // Check first word of edible to determine whether or not something can be eaten
//       // 0 = not edible, 1 = edible, 2 = caution
//       switch (edibleDetail.split(" ")[0]) {
//         case "This":
//           edibility = 1;
//           break;
//         case "WARNING!":
//           edibility = 2;
//           break;
//         case "STOP!":
//           edibility = 0;
//       }
//       var data = {
//         foodName: foodName,
//         edibile: edibility,
//         edibleDetails: edibleDetail,
//         foodDetails: foodDetail
//       };
//       console.log(data);
//       return data;
//     })
//     .catch(err => {
//       //handle error
//     });
// };

// testParse("http://whatcandogseat.com/Search/Search?item=Waffle-Icecream-Cone");

// module.exports = testParse;
