/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_intent', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    media_type: {
      type: DataTypes.STRING(129),
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    icon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_image',
        key: 'id'
      }
    }
  }, {
    tableName: 'ozpcenter_intent',
    timestamps: false
  });
};
