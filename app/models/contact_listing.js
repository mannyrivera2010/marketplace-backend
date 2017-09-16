/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contact_listing', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
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
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_contact',
        key: 'id'
      }
    }
  }, {
    tableName: 'contact_listing',
    timestamps: false
  });
};
