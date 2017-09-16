/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_contact', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    secure_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unsecure_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    organization: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contact_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_contacttype',
        key: 'id'
      }
    }
  }, {
    tableName: 'ozpcenter_contact',
    timestamps: false
  });
};
