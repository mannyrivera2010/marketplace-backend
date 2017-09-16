function AgencyService() {
}

// GET /api/agency
// Get a list of all system-wide Agency entries
function listAgency() {
  return [{}];
}

// GET /api/agency/{pk}
// Find an Agency Entry by ID
function getAgency(id) {
  return { id: id };
}

// POST /api/agency/
// Add an Agency
function postAgency(agencyObject) {
  return { id: id };
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
