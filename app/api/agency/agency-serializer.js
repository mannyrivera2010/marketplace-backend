var BaseSerializer = require('../../serializer').BaseSerializer
var models = require('../../models')

// Our serialization scheme for the `Agency`
const agencyScheme = {
  include: ['@pk', 'title', 'short_name'],
  // let's exclude from the above the primary key and all foreign keys
  exclude: ['@fk']
};

function AgencySerializer() {
    this.model = models.ozpcenter_agency;
    this.schema = agencyScheme
}

AgencySerializer.prototype = Object.create(BaseSerializer.prototype);
AgencySerializer.prototype.constructor = AgencySerializer;
var agencySerializer = new AgencySerializer();

module.exports = agencySerializer;
