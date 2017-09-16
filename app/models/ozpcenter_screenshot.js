/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Screenshot = sequelize.define('ozpcenter_screenshot', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    large_image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_image',
        key: 'id'
      }
    },
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_listing',
        key: 'id'
      }
    },
    small_image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_image',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(160),
      allowNull: true
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ozpcenter_screenshot',
    timestamps: false
  });

  return Screenshot
};
