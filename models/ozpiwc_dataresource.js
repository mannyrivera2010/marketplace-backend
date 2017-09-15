/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpiwc_dataresource', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    entity: {
      type: DataTypes.STRING(1048576),
      allowNull: true
    },
    content_type: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    pattern: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    permissions: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'ozpiwc_dataresource',
    timestamps: false
  });
};
