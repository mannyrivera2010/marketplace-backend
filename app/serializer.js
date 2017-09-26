var Serializer = require('sequelize-to-json')

function BaseSerializer() {
}

function serialize(object) {
    return new Serializer(this.model, this.schema).serialize(object);
}

function serializeMany(objects) {
    return Serializer.serializeMany(objects, this.model, this.schema);
}

BaseSerializer.prototype = {
  serialize: serialize,
  serializeMany: serializeMany,
};

module.exports.BaseSerializer = BaseSerializer;
