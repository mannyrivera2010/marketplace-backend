/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_docurl', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(2083),
      allowNull: false
    },
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_listing',
        key: 'id'
      }
    }
  }, {
    tableName: 'ozpcenter_docurl',
    timestamps: false
  });
};
