var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema'), 
    config = require('./config');
/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   var libWest = Listing.Listing();
   libWest.findOne({name:"Library West"}, function(listItem){
    console.log(listItem);}
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.Listing.findOneAndRemove({code: 'CABL'});

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.Listing.update({name: 'Phelps Laboratory'}, update {$set: {address: '1953 Museum Road Gainesville, FL 32611'}})
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
