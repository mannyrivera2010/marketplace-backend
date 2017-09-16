function ListingController() {
    this.listingService = require('./listing-service');
}

function listListing(req, res, next) {
  this.listingService.listListing().then(results =>{
      res.status(200).json(results)
  })
}

// listing/:listing_id
function getListing(req, res, next) {
  listing_id = Number(req.params['listing_id'])

  this.listingService.getListing(listing_id).then(results =>{
      res.status(200).json(results)
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

var listingController = new ListingController();

module.exports = listingController;
