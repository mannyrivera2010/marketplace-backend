/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_migrations', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    app: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    applied: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'django_migrations',
    timestamps: false
  });
};
