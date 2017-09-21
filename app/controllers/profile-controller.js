var SequelizeBaseError = require('sequelize/lib/errors').BaseError;

function ProfileController() {
    this.profileService = require('./profile-service');
    this.profileSerializer = require('./profile-serializer');
}

function listProfile(req, res, next) {
  this.profileService.listProfile().then(results =>{
      var serialized = this.profileSerializer.serializeMany(results)

      res.status(200).json(serialized)
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

// profile/:profile_id
function getProfile(req, res, next) {
  profile_id = Number(req.params['profile_id'])

  this.profileService.getProfile(profile_id).then(results =>{
      if(!results){throw new Error("Not Found")}

      var serialized = this.profileSerializer.serialize(results);
     res.status(200).json(serialized);
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

function postProfile(req, res, next) {
  this.profileService.postProfile(req.body).then(results =>{
      res.status(200).json(results)
  }).catch(SequelizeBaseError, error => {
      res.status(500).json(error)
  }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
  )
}

// profile/:profile_id
function deleteProfile(req, res, next) {
  profile_id = Number(req.params['profile_id'])

  this.profileService.deleteProfile(profile_id).then(results =>{
      if(!results){throw new Error("Not Found")}

     // var serialized = this.profileSerializer.serialize(results);
     res.status(200).json(results);
  // }).catch(Error, error => {
  //     res.status(500).json({"error": error.message})}
    }).catch(SequelizeBaseError, error => {
        res.status(500).json(error)
    }).catch(Error, error => {
      res.status(500).json({"error":error.message})}
    )
}

ProfileController.prototype = {
  listProfile: listProfile,
  getProfile: getProfile,
  postProfile: postProfile,
  deleteProfile: deleteProfile
};

module.exports = ProfileController;
