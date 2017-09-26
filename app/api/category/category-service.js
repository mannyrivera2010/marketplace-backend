var Promise = require('bluebird')
var models = require('../../models')

function CategoryService() {
}

// GET /api/category
// Get a list of all system-wide Category entries
function listCategory() {
    return new Promise((resolve, reject) => {
        models.ozpcenter_category
              .findAll()
              .then(result => { return resolve(result) })
              .catch(result => { return reject(result) });
    })
}

// GET /api/category/{pk}
// Find an Category Entry by ID
function getCategory(categoryId) {
    if(!categoryId){throw new Error("Validation Failed")}

    return new Promise((resolve, reject) => {
        models.ozpcenter_category
              .findOne({where:{'id': categoryId}})
              .then(result => { return resolve(result) })
              .catch(result => { return reject(result) });
    })
}

// POST /api/category/
// Add an Category
function postCategory(categoryObject) {
    return new Promise((resolve, reject) => {
        models.ozpcenter_category.create({
                title: categoryObject.title,
                short_name: categoryObject.short_name,
                icon_id: categoryObject.icon_id})
            .then(result => { return resolve(result) })
            .catch(result => { return reject(result) });
    })
}


// PUT /api/category/{pk}
// Update an Category Entry by ID
function updateCategory(categoryId) {
  if(!categoryId){throw new Error("Validation Failed")}
  return { id: id };
}


// PATCH /api/category/{pk}
// Update (Partial) an Category Entry by ID
function partialUpdateCategory(categoryId) {
  if(!categoryId){throw new Error("Validation Failed")}
  return { id: id };
}


// DELETE /api/category/{pk}
// Delete an Category Entry by ID
function deleteCategory(categoryId) {
  if(!categoryId){throw new Error("Validation Failed")}

  return new Promise((resolve, reject) => {
      models.ozpcenter_category
            .destroy({where:{'id': categoryId}})
            .then(result => { return resolve(result) })
            .catch(result => { return reject(result) });
  })
}


CategoryService.prototype = {
  listCategory: listCategory,
  getCategory: getCategory,
  postCategory: postCategory,
  updateCategory: updateCategory,
  partialUpdateCategory: partialUpdateCategory,
  deleteCategory: deleteCategory
};

var categoryService = new CategoryService();

module.exports = categoryService;
