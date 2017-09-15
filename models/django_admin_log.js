/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_admin_log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    object_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    object_repr: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    action_flag: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    change_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      }
    }
  }, {
    tableName: 'django_admin_log',
    timestamps: false
  });
};
