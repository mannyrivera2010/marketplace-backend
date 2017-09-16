/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_imagetype', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    max_size_bytes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_width: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    min_width: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    min_height: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_imagetype',
    timestamps: false
  });
};
