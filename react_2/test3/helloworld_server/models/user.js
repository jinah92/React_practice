/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nick: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'user',
    timestamps: false,

  });
};
