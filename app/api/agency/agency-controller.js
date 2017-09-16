function AgencyController() {
    this.agencyService = require('./agency-service');
}

function listAgency(req, res, next) {
  this.agencyService.listAgency().then(results =>{
      res.status(200).json(results)
  })
}

// agency/:agency_id
function getAgency(req, res, next) {
  agency_id = Number(req.params['agency_id'])

  this.agencyService.getAgency(agency_id).then(results =>{
      res.status(200).json(results)
  })
}

function postAgency(req, res, next) {
  this.agencyService.postAgency(req.body).then(results =>{
      res.status(200).json(results)
  }).catch(error => { res.status(500).json(error)})
}

AgencyController.prototype = {
  listAgency: listAgency,
  getAgency: getAgency,
  postAgency: postAgency
};

var agencyController = new AgencyController();

module.exports = agencyController;
