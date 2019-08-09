## Dog Eats web scraper created with Cheerio, Node.js and request-promise.

This is a web scraper that scraped a dog food website and put the data into a json format that became the start of my database for my DogEats application.

## JSON Data format

Example of parsed data into MongoDB:
{
\_id: ObjectID("5d4cb86ade1c9609f431e68d"),
foodName: "Anchovies",
edible: 1,
edibleDetails: "This product is SAFE in small quantities on occasion.",
foodDetails: "This food product is acceptable for dogs. Anchovies should be cooked a...",
imgUrl: null,
saves: 0,
comments: []
}

edible values
0=Not Edible
1=Edible
2=Caution

## Purpose

I was trying to create my intial database for my DogEats application but realized it was taking too long researching every type of food out there by myself. I found a website that had a good database but no API, so I decided to scrape the data for my own application and to build an API out of it.

## Technologies

Cheerio for DOM targeting<br />
Node.js for runtime environment to run file<br />
request-promise for handling requests and promises when scraping<br />

## Installing the app

Clone this repo into a directory<br />
cd directory<br />
npm install<br />
node run dogFoodScraper.js<br />

## Versions

1.0.0 - Scraped data into MongoDB atlas<br />
0.9.0 - Scraped data into local MongoDB server

## In Progress

None

## Known Bugs

None
