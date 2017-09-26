var BaseSerializer = require('../../serializer').BaseSerializer
var models = require('../../models')

// Our serialization scheme for the `Category`
const categoryScheme = {
  include: ['@all'],
  // let's exclude from the above the primary key and all foreign keys
  exclude: ['@fk']
};

function CategorySerializer() {
    this.model = models.ozpcenter_category;
    this.schema = categoryScheme
}

CategorySerializer.prototype = Object.create(BaseSerializer.prototype);
CategorySerializer.prototype.constructor = CategorySerializer;
var categorySerializer = new CategorySerializer();

module.exports = categorySerializer;
