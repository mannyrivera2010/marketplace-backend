function IntentService() {
}

// GET /api/intent
// Get a list of all system-wide Intent entries
function listIntent() {
  return [{}];
}

// GET /api/intent/{pk}
// Find an Intent Entry by ID
function getIntent(id) {
  return { id: id };
}

// POST /api/intent/
// Add an Intent
function postIntent(intentObject) {
  return { id: id };
}


// PUT /api/intent/{pk}
// Update an Intent Entry by ID
function updateIntent(id) {
  return { id: id };
}


// PATCH /api/intent/{pk}
// Update (Partial) an Intent Entry by ID
function partialUpdateIntent(id) {
  return { id: id };
}


// DELETE /api/intent/{pk}
// Delete an Intent Entry by ID
function deleteUpdateIntent(id) {
  return { id: id };
}


IntentService.prototype = {
  listIntent: listIntent,
  getIntent: getIntent,
  postIntent: postIntent,
  updateIntent: updateIntent,
  partialUpdateIntent: partialUpdateIntent,
  deleteUpdateIntent: deleteUpdateIntent
};

var intentService = new IntentService();

module.exports = intentService;
