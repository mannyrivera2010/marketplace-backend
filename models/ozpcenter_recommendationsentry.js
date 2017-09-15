/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_recommendationsentry', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    target_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_profile',
        key: 'id'
      }
    },
    recommendation_data: {
      type: "BLOB",
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_recommendationsentry',
    timestamps: false
  });
};
