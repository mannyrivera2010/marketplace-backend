var Promise = require('bluebird')
var models = require('../../app/models')

function ListingService() {
}


included_listing_fields = [
  {model:models.ozpcenter_agency, as:'agency'},
  {model:models.ozpcenter_image, as:'small_icon'},
  {model:models.ozpcenter_image, as:'large_icon'},
  {model:models.ozpcenter_image, as:'banner_icon'},
  {model:models.ozpcenter_image, as:'large_banner_icon'},
  {model:models.ozpcenter_category, as:'categories'},
  {model:models.ozpcenter_contact, as:'contacts'},
  {model:models.ozpcenter_profile, as:'owners', attributes: ['display_name']},
  {model:models.ozpcenter_tag, as:'tags'},
  {model:models.ozpcenter_intent, as:'intents'},
  {model:models.ozpcenter_screenshot, as:'screenshots',
        include: [{model:models.ozpcenter_image, as:'screenshot_small_image'},
                  {model:models.ozpcenter_image, as:'screenshot_large_image'}]},
]


// GET /api/listing
// Get a list of all system-wide Listing entries
function listListing() {
    return new Promise((resolve, reject) => {
        models.ozpcenter_listing
              .findAll({include:included_listing_fields})
              .then(result => { return resolve(result) });
        }
    )
}


// GET /api/listing/{pk}
// Find an Listing Entry by ID
function getListing(listing_id) {
    return new Promise((resolve, reject) => {
        models.ozpcenter_listing
              .findOne({include:included_listing_fields,
                  where:{'id':listing_id}})
              .then(result => { return resolve(result) });
        }
    )
}


// POST /api/listing/
// Add an Listing
function postListing(listingObject) {
  return { id: id };
}


// PUT /api/listing/{pk}
// Update an Listing Entry by ID
function updateListing(id) {
  return { id: id };
}


// PATCH /api/listing/{pk}
// Update (Partial) an Listing Entry by ID
function partialUpdateListing(id) {
  return { id: id };
}


// DELETE /api/listing/{pk}
// Delete an Listing Entry by ID
function deleteUpdateListing(id) {
  return { id: id };
}


ListingService.prototype = {
  listListing: listListing,
  getListing: getListing,
  postListing: postListing,
  updateListing: updateListing,
  partialUpdateListing: partialUpdateListing,
  deleteUpdateListing: deleteUpdateListing,

  included_listing_fields: included_listing_fields
};

var listingService = new ListingService();

module.exports = listingService;
