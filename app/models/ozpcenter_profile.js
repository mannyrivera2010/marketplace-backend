/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_profile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    dn: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    issuer_dn: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    auth_expires: {
      type: DataTypes.DATE,
      allowNull: false
    },
    access_control: {
      type: DataTypes.STRING(16384),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_user',
        key: 'id'
      }
    },
    center_tour_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    hud_tour_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    webtop_tour_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    email_notification_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    listing_notification_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    subscription_notification_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_profile',
    timestamps: false
  });
};
