/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category_listing', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_listing',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_category',
        key: 'id'
      }
    }
  }, {
    tableName: 'category_listing',
    timestamps: false
  });
};
