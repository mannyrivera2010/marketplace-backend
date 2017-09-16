function ProfileService() {
}

// GET /api/profile
// Get a list of all system-wide Profile entries
function listProfile() {
  return [{}];
}

// GET /api/profile/{pk}
// Find an Profile Entry by ID
function getProfile(id) {
  return { id: id };
}

// POST /api/profile/
// Add an Profile
function postProfile(profileObject) {
  return { id: id };
}


// PUT /api/profile/{pk}
// Update an Profile Entry by ID
function updateProfile(id) {
  return { id: id };
}


// PATCH /api/profile/{pk}
// Update (Partial) an Profile Entry by ID
function partialUpdateProfile(id) {
  return { id: id };
}


// DELETE /api/profile/{pk}
// Delete an Profile Entry by ID
function deleteUpdateProfile(id) {
  return { id: id };
}


ProfileService.prototype = {
  listProfile: listProfile,
  getProfile: getProfile,
  postProfile: postProfile,
  updateProfile: updateProfile,
  partialUpdateProfile: partialUpdateProfile,
  deleteUpdateProfile: deleteUpdateProfile
};

var profileService = new ProfileService();

module.exports = profileService;
