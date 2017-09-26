function ListingController() {
    this.listingService = require('./listing-service');
    this.listingSerializer = require('./listing-serializer');
}

function list(req, res, next) {
  this.listingService.listListing().then(results =>{
    var serialized = this.listingSerializer.serializeMany(results)
    res.status(200).json(serialized)
  })
}

// listing/:listing_id
function retrieve(req, res, next) {
  listing_id = Number(req.params['listing_id'])

  this.listingService.getListing(listing_id).then(results =>{
      var serialized = this.listingSerializer.serialize(results)
      res.status(200).json(serialized)
  })
}

function create(req, res, next) {
  res.status(200).json({ hello: 'post' });
}

ListingController.prototype = {
  list: list,
  retrieve: retrieve,
  create: create
};

module.exports = ListingController;
