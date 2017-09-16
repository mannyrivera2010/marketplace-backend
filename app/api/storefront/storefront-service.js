var Promise = require('bluebird')
var models = require('../../../app/models')

function StorefrontService() {
    this.listingService = require('./listing-service');
    this.included_listing_fields = listingService.included_listing_fields
}

function get_storefront_recommended() {
    return new Promise((resolve, reject) => {
        models.ozpcenter_listing
              .findAll({include:this.included_listing_fields, limit: 10})
              .then(result => { return resolve(result) });
        }
    )
}

function get_storefront_most_popular() {
    return new Promise((resolve, reject) => {
        models.ozpcenter_listing
              .findAll({include:this.included_listing_fields, limit: 36})
              .then(result => { return resolve(result) });
        }
    )
}

function get_storefront_featured(){
    return new Promise((resolve, reject) => {
        models.ozpcenter_listing
              .findAll({include:this.included_listing_fields, limit: 10})
              .then(result => { return resolve(result) });
        }
    )
}

function get_storefront_recent(){
    return new Promise((resolve, reject) => {
        models.ozpcenter_listing
              .findAll({include:this.included_listing_fields, limit: 24})
              .then(result => { return resolve(result) });
        }
    )
}

// GET /api/storefront
// Get a list of all system-wide Storefront entries
function listStorefront() {
  return [{}];
}

// GET /api/storefront/{pk}
// Find an Storefront Entry by ID
function getStorefront(id) {
  return { id: id };
}

// POST /api/storefront/
// Add an Storefront
function postStorefront(storefrontObject) {
  return { id: id };
}


// PUT /api/storefront/{pk}
// Update an Storefront Entry by ID
function updateStorefront(id) {
  return { id: id };
}


// PATCH /api/storefront/{pk}
// Update (Partial) an Storefront Entry by ID
function partialUpdateStorefront(id) {
  return { id: id };
}


// DELETE /api/storefront/{pk}
// Delete an Storefront Entry by ID
function deleteUpdateStorefront(id) {
  return { id: id };
}


StorefrontService.prototype = {
  listStorefront: listStorefront,
  getStorefront: getStorefront,
  postStorefront: postStorefront,
  updateStorefront: updateStorefront,
  partialUpdateStorefront: partialUpdateStorefront,
  deleteUpdateStorefront: deleteUpdateStorefront
};

var storefrontService = new StorefrontService();

module.exports = storefrontService;
