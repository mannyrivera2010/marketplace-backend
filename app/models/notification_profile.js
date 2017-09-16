/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification_profile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    notification_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_notification',
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
    tableName: 'notification_profile',
    timestamps: false
  });
};
