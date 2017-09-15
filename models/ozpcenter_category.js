/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('ozpcenter_category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ozpcenter_category',
    timestamps: false
  });
  return Category
};
