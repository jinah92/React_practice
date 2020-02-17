/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hashtag', {
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'hashtag',
    timestamps: true,
    paranoid: true
  });
};
