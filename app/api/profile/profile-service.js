var Promise = require('bluebird')
var models = require('../../models')

function ProfileService() {
}

included_listing_fields = [
    {model:models.auth_user, as:'user'},
]

// GET /api/profile
// Get a list of all system-wide Profile entries
function listProfile() {
    return new Promise((resolve, reject) => {
        models.ozpcenter_profile
              .findAll({include:included_listing_fields})
              .then(result => { return resolve(result) })
              .catch(result => { return reject(result) });
    })
}

// GET /api/profile/{pk}
// Find an Profile Entry by ID
function getProfile(profileId) {
    if(!profileId){throw new Error("Profile Validation Failed")}

    return new Promise((resolve, reject) => {
        models.ozpcenter_profile
              .findOne({include:included_listing_fields,
                  where:{'id': profileId}})
              .then(result => { return resolve(result) })
              .catch(result => { return reject(result) });
    })
}

// POST /api/profile/
// Add an Profile
function postProfile(profileObject) {
    return new Promise((resolve, reject) => {
        models.ozpcenter_profile.create({
                title: profileObject.title,
                short_name: profileObject.short_name,
                icon_id: profileObject.icon_id})
            .then(result => { return resolve(result) })
            .catch(result => { return reject(result) });
    })
}


// PUT /api/profile/{pk}
// Update an Profile Entry by ID
function updateProfile(profileId) {
  if(!profileId){throw new Error("Validation Failed")}
  return { id: id };
}


// PATCH /api/profile/{pk}
// Update (Partial) an Profile Entry by ID
function partialUpdateProfile(profileId) {
  if(!profileId){throw new Error("Validation Failed")}
  return { id: id };
}


// DELETE /api/profile/{pk}
// Delete an Profile Entry by ID
function deleteProfile(profileId) {
  if(!profileId){throw new Error("Validation Failed")}

  return new Promise((resolve, reject) => {
      models.ozpcenter_profile
            .destroy({where:{'id': profileId}})
            .then(result => { return resolve(result) })
            .catch(result => { return reject(result) });
  })
}


ProfileService.prototype = {
  listProfile: listProfile,
  getProfile: getProfile,
  postProfile: postProfile,
  updateProfile: updateProfile,
  partialUpdateProfile: partialUpdateProfile,
  deleteProfile: deleteProfile
};

var profileService = new ProfileService();

module.exports = profileService;
