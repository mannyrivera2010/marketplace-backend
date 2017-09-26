var SequelizeBaseError = require('sequelize/lib/errors').BaseError;

function CategoryController() {
    this.categoryService = require('./category-service');
    this.categorySerializer = require('./category-serializer');
}

function list(req, res, next) {
  this.categoryService.listCategory().then(results =>{
      var serialized = this.categorySerializer.serializeMany(results)

      res.status(200).json(serialized)
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

// category/:category_id
function retrieve(req, res, next) {
  category_id = Number(req.params['category_id'])

  this.categoryService.getCategory(category_id).then(results =>{
      if(!results){throw new Error("Not Found")}

      var serialized = this.categorySerializer.serialize(results);
     res.status(200).json(serialized);
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

function create(req, res, next) {
  this.categoryService.postCategory(req.body).then(results =>{
      res.status(200).json(results)
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

// category/:category_id
function destroy(req, res, next) {
  category_id = Number(req.params['category_id'])

  this.categoryService.deleteCategory(category_id).then(results =>{
      if(!results){throw new Error("Not Found")}

     res.status(200).json(results);
    }).catch(SequelizeBaseError, error => {
        res.status(500).json(error)
    }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
    )
}

CategoryController.prototype = {
  list: list,
  retrieve: retrieve,
  create: create,
  destroy: destroy
};

module.exports = CategoryController;
