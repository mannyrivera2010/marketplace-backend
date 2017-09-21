/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('ozpcenter_profile', {
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
      allowNull: false,

      get() {
          const access_control_string = this.getDataValue('access_control');
          return JSON.parse(access_control_string)
      },
      set(access_control_object) {
          access_control_string = JSON.stringify(access_control_object)
          this.setDataValue('access_control', access_control_string);
      }
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

  Profile.associate = function (models) {
      Profile.belongsTo(models.auth_user, {foreignKey:'user_id',as:'user'});
  }

  return Profile;
};
