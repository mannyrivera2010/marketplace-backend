/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_agency', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    short_name: {
      type: DataTypes.STRING(32),
      allowNull: false
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
