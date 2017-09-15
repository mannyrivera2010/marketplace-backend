/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_changedetail', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    field_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    old_value: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    new_value: {
      type: DataTypes.STRING(4000),
      allowNull: true
    }
  }, {
    tableName: 'ozpcenter_changedetail',
    timestamps: false
  });
};
