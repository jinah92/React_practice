/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('follow', {
    follower_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'user',
        key: 'email'
      }
    },
    following_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'user',
        key: 'email'
      }
    }
  }, {
    tableName: 'follow',
    timestamps: false,

  });
};
