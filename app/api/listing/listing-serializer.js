var BaseSerializer = require('../../serializer').BaseSerializer
var models = require('../../models')

// Our serialization scheme for the `Listing`
const listingScheme = {
  include: ['@all',
            'agency',
            'small_icon',
            'large_icon',
            'banner_icon',
            'large_banner_icon',
            'categories',
            'contacts',
            'owners',
            'tags',
            'intents',
            'screenshots',
          ],
  // let's exclude from the above the primary key and all foreign keys
  exclude: ['@fk'],

  assoc: {
    agency: {
      include:['title', 'short_name']
    },
    small_icon: {
      include:['id', 'security_marking']
    },
    large_icon: {
      include:['id', 'security_marking']
    },
    banner_icon: {
      include:['id', 'security_marking']
    },
    large_banner_icon: {
      include:['id', 'security_marking']
    },
    categories: {
      include:['title', 'description']
    },
    contacts: {
      include:['id', 'secure_phone', 'unsecure_phone', 'email', 'name', 'organization', 'contact_type']
    },
    owners: {
      include:['@all']
    },
    tags: {
      include:['id', 'name']
    },
    intents: {
      include:['@all']
    },
    screenshots: {
      include:['id', 'order', 'description', 'screenshot_small_image', 'screenshot_large_image'],
      as: {screenshot_small_image:'small_image', screenshot_large_image: 'large_image'},

      assoc:{
        screenshot_small_image:{
          include:['id', 'security_marking']
        },
        screenshot_large_image:{
          include:['id', 'security_marking']
        }
      }
    }
  }
};

function ListingSerializer() {
    this.model = models.ozpcenter_listing;
    this.schema = listingScheme
}

ListingSerializer.prototype = Object.create(BaseSerializer.prototype);
ListingSerializer.prototype.constructor = ListingSerializer;

var listingSerializer = new ListingSerializer();

module.exports = listingSerializer;
