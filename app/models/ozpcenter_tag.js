/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_tag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_tag',
    timestamps: false
  });
};
