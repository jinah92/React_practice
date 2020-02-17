/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
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
    timestamps: true, //creadteAt(생성시간), updatedAt(수정시간) 자동 저장
    paranoid: true  //deletedAt(삭제시간) 자동 저장
  });
};
