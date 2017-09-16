/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_listingtype', {
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
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_listingtype',
    timestamps: false
  });
};
