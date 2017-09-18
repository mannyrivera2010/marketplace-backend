var Promise = require('bluebird')
var models = require('../../app/models')

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
    if(!agencyId){throw new Error("Validation Failed")}

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
            .catch(result => { return reject(result) });
    })
}


// PUT /api/agency/{pk}
// Update an Agency Entry by ID
function updateAgency(agencyId) {
  if(!agencyId){throw new Error("Validation Failed")}
  return { id: id };
}


// PATCH /api/agency/{pk}
// Update (Partial) an Agency Entry by ID
function partialUpdateAgency(agencyId) {
  if(!agencyId){throw new Error("Validation Failed")}
  return { id: id };
}


// DELETE /api/agency/{pk}
// Delete an Agency Entry by ID
function deleteAgency(agencyId) {
  if(!agencyId){throw new Error("Validation Failed")}

  return new Promise((resolve, reject) => {
      models.ozpcenter_agency
            .destroy({where:{'id': agencyId}})
            .then(result => { return resolve(result) })
            .catch(result => { return reject(result) });
  })
}


AgencyService.prototype = {
  listAgency: listAgency,
  getAgency: getAgency,
  postAgency: postAgency,
  updateAgency: updateAgency,
  partialUpdateAgency: partialUpdateAgency,
  deleteAgency: deleteAgency
};

module.exports = AgencyService;
