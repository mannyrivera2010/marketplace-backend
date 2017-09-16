/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_group', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    tableName: 'auth_group',
    timestamps: false
  });
};
