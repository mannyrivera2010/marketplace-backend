/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('intent_listing', {
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
    intent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_intent',
        key: 'id'
      }
    }
  }, {
    tableName: 'intent_listing',
    timestamps: false
  });
};
