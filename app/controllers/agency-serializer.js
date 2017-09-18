var Serializer = require('sequelize-to-json')
var models = require('../../app/models')

function AgencySerializer() {
}

// Our serialization scheme for the `Agency`
const agencyScheme = {
  // include all own properties and the associated `User` instance
  include: ['@pk', 'title', 'short_name'],
  // let's exclude from the above the primary key and all foreign keys
  exclude: ['@fk']
};


function serialize(agency) {
    return new Serializer(models.ozpcenter_agency, agencyScheme).serialize(agency);
}

function serializeMany(agencies) {
    return Serializer.serializeMany(agencies, models.ozpcenter_agency, agencyScheme);
}


AgencySerializer.prototype = {
  serialize: serialize,
  serializeMany: serializeMany,

};

var agencySerializer = new AgencySerializer();

module.exports = agencySerializer;
