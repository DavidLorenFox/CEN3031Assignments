'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database */
  mongoose.connect(config.db.uri,{useMongoClient: true});
  console.log(mongoose.connection);
/*
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 var listings = JSON.parse(fs.readFileSync('listings.json', 'utf8'));
 console.log(listings);

 console.log("2");
 console.log(listings.entries.length);
  for (var i = 0; i< listings.entries.length; i++)
  {
    var entry = listings.entries[i];
    if(entry.code != null && entry.name !=null)
    {
      var mongoListing;
      if(entry.coordinates!= null)
      {
        mongoListing = new Listing.Listing(
        {
          code: entry.code,
          name: entry.name,
          coordinates: {
            longitude: entry.coordinates.longitude,
            latitude: entry.coordinates.latitude
          },
          address: entry.address
        });
      }
      else
      {
        mongoListing = new Listing.Listing(
        {
          code: entry.code,
          name: entry.name,
          address: entry.address
        });
      }
      mongoListing.save(function(err)
      {
        if(err) throw err;
     });
    }
    else
    {
      try
      {
        throw Error('All listings require a name and code');
      } 
      catch (e) 
      {
        console.log(e);
      };
    }
    

  }
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */