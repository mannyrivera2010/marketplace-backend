var SequelizeBaseError = require('sequelize/lib/errors').BaseError;

function AgencyController() {
    this.agencyService = require('./agency-service');
    this.agencySerializer = require('./agency-serializer');
}

function listAgency(req, res, next) {
  this.agencyService.listAgency().then(results =>{
      var serialized = this.agencySerializer.serializeMany(results)

      res.status(200).json(serialized)
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

// agency/:agency_id
function getAgency(req, res, next) {
  agency_id = Number(req.params['agency_id'])

  this.agencyService.getAgency(agency_id).then(results =>{
      if(!results){throw new Error("Not Found")}

      var serialized = this.agencySerializer.serialize(results);
     res.status(200).json(serialized);
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

function postAgency(req, res, next) {
  this.agencyService.postAgency(req.body).then(results =>{
      res.status(200).json(results)
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

// agency/:agency_id
function deleteAgency(req, res, next) {
  agency_id = Number(req.params['agency_id'])

  this.agencyService.deleteAgency(agency_id).then(results =>{
      if(!results){throw new Error("Not Found")}

     // var serialized = this.agencySerializer.serialize(results);
     res.status(200).json(results);
  // }).catch(Error, error => {
  //     res.status(500).json({"error": error.message})}
    }).catch(SequelizeBaseError, error => {
        res.status(500).json(error)
    }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
    )
}

AgencyController.prototype = {
  listAgency: listAgency,
  getAgency: getAgency,
  postAgency: postAgency,
  deleteAgency: deleteAgency
};

module.exports = AgencyController;
