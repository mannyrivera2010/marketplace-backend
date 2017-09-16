/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corsheaders_corsmodel', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    cors: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'corsheaders_corsmodel',
    timestamps: false
  });
};
