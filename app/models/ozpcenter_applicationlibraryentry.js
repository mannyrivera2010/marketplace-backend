/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_applicationlibraryentry', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    folder: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_listing',
        key: 'id'
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_profile',
        key: 'id'
      }
    },
    position: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_applicationlibraryentry',
    timestamps: false
  });
};
