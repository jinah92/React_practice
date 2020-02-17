const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);

db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});  //through ==> 테이블명
db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'});    

db.User.belongsToMany(db.User, {
  foreignKey: 'followingId',
  as: 'Followers',    //alias
  through: 'Follow',  //테이블명
});
db.User.belongsToMany(db.User, {
  foreignKey: 'followerId',
  as: 'Followings',
  through: 'Follow',  //테이블명
});

module.exports = db;
