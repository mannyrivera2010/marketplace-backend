/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('listing_activity_change_detail', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    listingactivity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_listingactivity',
        key: 'id'
      }
    },
    changedetail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_changedetail',
        key: 'id'
      }
    }
  }, {
    tableName: 'listing_activity_change_detail',
    timestamps: false
  });
};
