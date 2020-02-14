/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hashtag', {
    hashtag_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'hashtag',
    timestamps: false,

  });
};
