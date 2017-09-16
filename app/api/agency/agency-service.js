var Promise = require('bluebird')
var models = require('../../../app/models')

function AgencyService() {
}

// GET /api/agency
// Get a list of all system-wide Agency entries
function listAgency() {
    return new Promise((resolve, reject) => {
        models.ozpcenter_agency
              .findAll()
              .then(result => { return resolve(result) })
              .catch(result => { return reject(result) });
    })
}

// GET /api/agency/{pk}
// Find an Agency Entry by ID
function getAgency(agencyId) {
    return new Promise((resolve, reject) => {
        models.ozpcenter_agency
              .findOne({where:{'id': agencyId}})
              .then(result => { return resolve(result) })
              .catch(result => { return reject(result) });
    })
}

// POST /api/agency/
// Add an Agency
function postAgency(agencyObject) {
    return new Promise((resolve, reject) => {
        models.ozpcenter_agency.create({
                title: agencyObject.title,
                short_name: agencyObject.short_name,
                icon_id: agencyObject.icon_id})
            .then(result => { return resolve(result) })
            .catch(result => { return reject(result) })
    })
}


// PUT /api/agency/{pk}
// Update an Agency Entry by ID
function updateAgency(id) {
  return { id: id };
}


// PATCH /api/agency/{pk}
// Update (Partial) an Agency Entry by ID
function partialUpdateAgency(id) {
  return { id: id };
}


// DELETE /api/agency/{pk}
// Delete an Agency Entry by ID
function deleteUpdateAgency(id) {
  return { id: id };
}


AgencyService.prototype = {
  listAgency: listAgency,
  getAgency: getAgency,
  postAgency: postAgency,
  updateAgency: updateAgency,
  partialUpdateAgency: partialUpdateAgency,
  deleteUpdateAgency: deleteUpdateAgency
};

var agencyService = new AgencyService();

module.exports = agencyService;
