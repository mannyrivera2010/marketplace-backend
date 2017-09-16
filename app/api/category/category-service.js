function CategoryService() {
}

// GET /api/category
// Get a list of all system-wide Category entries
function listCategory() {
  return [{}];
}

// GET /api/category/{pk}
// Find an Category Entry by ID
function getCategory(id) {
  return { id: id };
}

// POST /api/category/
// Add an Category
function postCategory(categoryObject) {
  return { id: id };
}


// PUT /api/category/{pk}
// Update an Category Entry by ID
function updateCategory(id) {
  return { id: id };
}


// PATCH /api/category/{pk}
// Update (Partial) an Category Entry by ID
function partialUpdateCategory(id) {
  return { id: id };
}


// DELETE /api/category/{pk}
// Delete an Category Entry by ID
function deleteUpdateCategory(id) {
  return { id: id };
}


CategoryService.prototype = {
  listCategory: listCategory,
  getCategory: getCategory,
  postCategory: postCategory,
  updateCategory: updateCategory,
  partialUpdateCategory: partialUpdateCategory,
  deleteUpdateCategory: deleteUpdateCategory
};

var categoryService = new CategoryService();

module.exports = categoryService;
