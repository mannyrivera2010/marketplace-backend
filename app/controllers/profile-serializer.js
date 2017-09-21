var Serializer = require('sequelize-to-json')
var models = require('../../app/models')

function ProfileSerializer() {
}

// Our serialization scheme for the `Profile`
const profileScheme = {
  // include all own properties and the associated `User` instance
  include: ['@all', 'user'],
  // let's exclude from the above the primary key and all foreign keys
  exclude: ['@fk', 'access_control'],

  assoc: {
    user: {
      include:['username', 'email', 'password'],
      exclude: ['@fk']
    }
  }
};


function serialize(profile) {
    return new Serializer(models.ozpcenter_profile, profileScheme).serialize(profile);
}

function serializeMany(agencies) {
    return Serializer.serializeMany(agencies, models.ozpcenter_profile, profileScheme);
}


ProfileSerializer.prototype = {
  serialize: serialize,
  serializeMany: serializeMany,
};

var profileSerializer = new ProfileSerializer();

module.exports = profileSerializer;
