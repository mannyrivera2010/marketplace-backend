/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profile_listing', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_listing',
        key: 'id'
      }
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_profile',
        key: 'id'
      }
    }
  }, {
    tableName: 'profile_listing',
    timestamps: false
  });
};
