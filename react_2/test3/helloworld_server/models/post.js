/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post', {
    post_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'user',
        key: 'email'
      }
    },
    content: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'post',
    timestamps: false,

  });
};
