/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_notificationmailbox', {
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
    notification_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_notification',
        key: 'id'
      }
    },
    emailed_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    read_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    acknowledged_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_notificationmailbox',
    timestamps: false
  });
};
