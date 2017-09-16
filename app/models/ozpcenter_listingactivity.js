/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_listingactivity', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    activity_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_profile',
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
    action: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_listingactivity',
    timestamps: false
  });
};
