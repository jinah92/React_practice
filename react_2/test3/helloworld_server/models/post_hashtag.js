/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_hashtag', {
    post_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'post',
        key: 'post_no'
      }
    },
    hashtag_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'hashtag',
        key: 'hashtag_no'
      }
    }
  }, {
    tableName: 'post_hashtag',
    timestamps: false,

  });
};
