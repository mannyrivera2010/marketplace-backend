/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Image = sequelize.define('ozpcenter_image', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    security_marking: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    file_extension: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    image_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_imagetype',
        key: 'id'
      }
    }
  }, {
    tableName: 'ozpcenter_image',
    timestamps: false
  });

  Image.associate = function (models) {
    Image.belongsTo(models.ozpcenter_imagetype, {foreignKey:'image_type_id'})
  };

  return Image
};
