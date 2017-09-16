function StorefrontService() {
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
