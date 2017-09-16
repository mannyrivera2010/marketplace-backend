/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ozpcenter_review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    edited_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_profile',
        key: 'id'
      }
    },
    listing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ozpcenter_listing',
        key: 'id'
      }
    },
    review_parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ozpcenter_review',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ozpcenter_review',
    timestamps: false
  });
};
