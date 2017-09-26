/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Listing = sequelize.define('ozpcenter_listing', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    edited_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(8192),
      allowNull: true
    },
    launch_url: {
      type: DataTypes.STRING(2083),
      allowNull: true
    },
    version_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unique_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_is_new: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_short: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    requirements: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    approval_status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    avg_rate: {
      type: DataTypes.REAL,
      allowNull: false
    },
    total_votes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_rate5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_rate4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_rate3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_rate2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_rate1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_reviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iframe_compatible: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    security_marking: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    is_private: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    agency_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_agency',
        key: 'id'
      }
    },
    banner_icon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_image',
        key: 'id'
      }
    },
    current_rejection_id: {
      type: DataTypes.INTEGER,
      allowNullListing: true,
      references: {
        model: 'ozpcenter_listingactivity',
        key: 'id'
      }
    },
    large_banner_icon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_image',
        key: 'id'
      }
    },
    large_icon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_image',
        key: 'id'
      }
    },
    last_activity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { type: DataTypes.STRING(8192),
        model: 'ozpcenter_listingactivity',
        key: 'id'
      }
    },
    listing_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_listingtype',
        key: 'id'
      }
    },
    required_listings_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_listing',
        key: 'id'
      }
    },
    small_icon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_image',
        key: 'id'
      }
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    total_review_responses: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_listing',
    timestamps: false
  });

  Listing.associate = function (models) {
    Listing.belongsToMany(models.ozpcenter_category, { through: 'category_listing', foreignKey:'listing_id', otherKey:'category_id', as: 'categories' });
    Listing.belongsToMany(models.ozpcenter_contact, { through: 'contact_listing', foreignKey:'listing_id', otherKey:'contact_id', as: 'contacts' });

    Listing.belongsToMany(models.ozpcenter_profile, { through: 'profile_listing', foreignKey:'listing_id', otherKey:'profile_id', as: 'owners' });
    Listing.belongsToMany(models.ozpcenter_tag, { through: 'tag_listing', foreignKey:'listing_id', otherKey:'tag_id', as: 'tags' });
    Listing.belongsToMany(models.ozpcenter_intent, { through: 'intent_listing', foreignKey:'listing_id', otherKey:'intent_id', as: 'intents' });

    screenshot = models.ozpcenter_screenshot
    screenshot.belongsTo(models.ozpcenter_image, {foreignKey:'small_image_id',as:'screenshot_small_image'})
    screenshot.belongsTo(models.ozpcenter_image, {foreignKey:'large_image_id',as:'screenshot_large_image'})
    Listing.hasMany(screenshot, {foreignKey:'listing_id', as: 'screenshots' });

    Listing.belongsTo(models.ozpcenter_agency, {foreignKey:'agency_id',as:'agency'});

    small_icon = models.ozpcenter_image
    small_icon.belongsTo(models.ozpcenter_imagetype, {foreignKey:'image_type_id',as:'small_icon_image_type'})
    small_icon = Listing.belongsTo(small_icon, {foreignKey:'small_icon_id',as:'small_icon'});

    large_icon = models.ozpcenter_image
    large_icon.belongsTo(models.ozpcenter_imagetype, {foreignKey:'image_type_id',as:'large_icon_image_type'})
    Listing.belongsTo(large_icon, {foreignKey:'large_icon_id',as:'large_icon'});

    banner_icon = models.ozpcenter_image
    banner_icon.belongsTo(models.ozpcenter_imagetype, {foreignKey:'image_type_id',as:'banner_icon_image_type'})
    Listing.belongsTo(banner_icon, {foreignKey:'banner_icon_id',as:'banner_icon'});

    large_banner_icon = models.ozpcenter_image
    large_banner_icon.belongsTo(models.ozpcenter_imagetype, {foreignKey:'image_type_id',as:'large_banner_icon_image_type'})
    Listing.belongsTo(large_banner_icon, {foreignKey:'large_banner_icon_id',as:'large_banner_icon'});
  };


  // included_listing_fields = [
  //   {model:models.ozpcenter_agency, as:'agency'},
  //   {model:models.ozpcenter_image, as:'small_icon'},
  //   {model:models.ozpcenter_image, as:'large_icon'},
  //   {model:models.ozpcenter_image, as:'banner_icon'},
  //   {model:models.ozpcenter_image, as:'large_banner_icon'},
  //   {model:models.ozpcenter_category, as:'categories'},
  //   {model:models.ozpcenter_contact, as:'contacts'},
  //   {model:models.ozpcenter_profile, as:'owners', attributes: ['display_name']},
  //   {model:models.ozpcenter_tag, as:'tags'},
  //   {model:models.ozpcenter_intent, as:'intents'},
  //   {model:models.ozpcenter_screenshot, as:'screenshots',
  //         include: [{model:models.ozpcenter_image, as:'screenshot_small_image'},
  //                   {model:models.ozpcenter_image, as:'screenshot_large_image'}]},
  // ]
  // Adding a class level method
  Listing.get_query_fields = function(){
     return []
  };

  return Listing
};
