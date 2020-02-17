const Post = require('../models').Post;

async function getAllPost(){
    try{
        const posts = await Post.findAll({
            include: {
                model: User,
                attributes: ['id', 'nick']
            },
            order: [['createdAt', 'DESC']]
        });
        return posts;
    }catch(err){
        console.log(err);
        return null;
    }
}

module.exports = getAllPost;