/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_profile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_profile',
        key: 'id'
      }
    },
    agency_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_agency',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_profile',
    timestamps: false
  });
};
