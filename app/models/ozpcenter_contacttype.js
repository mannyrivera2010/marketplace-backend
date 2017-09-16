/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_contacttype', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_contacttype',
    timestamps: false
  });
};
