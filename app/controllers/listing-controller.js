function ListingController() {
    this.listingService = require('./listing-service');
    this.listingSerializer = require('./listing-serializer');
}

function listListing(req, res, next) {
  this.listingService.listListing().then(results =>{
    var serialized = this.listingSerializer.serializeMany(results)
    res.status(200).json(serialized)
  })
}

// listing/:listing_id
function getListing(req, res, next) {
  listing_id = Number(req.params['listing_id'])

  this.listingService.getListing(listing_id).then(results =>{
      var serialized = this.listingSerializer.serialize(results)
      res.status(200).json(serialized)
  })
}

function postListing(req, res, next) {
  res.status(200).json({ hello: 'post' });
}

ListingController.prototype = {
  listListing: listListing,
  getListing: getListing,
  postListing: postListing
};

module.exports = ListingController;
