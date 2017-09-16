/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_content_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    app_label: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'django_content_type',
    timestamps: false
  });
};
