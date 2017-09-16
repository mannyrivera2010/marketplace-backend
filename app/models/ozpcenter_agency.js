/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_agency', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
      // unique: true
    },
    short_name: {
      type: DataTypes.STRING(32),
      allowNull: false
      // unique: true
    },
    icon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_image',
        key: 'id'
      }
    }
  }, {
    tableName: 'ozpcenter_agency',
    timestamps: false
  });
};
