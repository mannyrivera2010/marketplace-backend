/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_notification', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(4096),
      allowNull: false
    },
    expires_date: {
      type: DataTypes.DATE,
      allowNull: false
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
      allowNull: true,
      references: {
        model: 'ozpcenter_listing',
        key: 'id'
      }
    },
    agency_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_agency',
        key: 'id'
      }
    },
    peer: {
      type: DataTypes.STRING(4096),
      allowNull: true
    },
    group_target: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notification_type: {
      type: DataTypes.STRING(24),
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_notification',
    timestamps: false
  });
};
