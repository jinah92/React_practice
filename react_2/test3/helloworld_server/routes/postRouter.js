const express = require('express');
const router = express.Router();
const Post = require('../models').Post;
const Hashtag = require('../models').Hashtag;
const {getAllPosts} = require('./common');
const User = require('../models').User;

router.post('/following', async (req, res)=>{
    const follower = req.body.followerId;
    const following = req.body.followingId;
    console.log(follower, following);
    try{
        const user = await User.findOne({where: {id: follower}});
        const following_id = await User.findOne({where: {nick: following}});
        console.log(user, following_id);
        await user.addFollowing(following_id.id);
        res.json({message: true});
    }catch(err){
        console.log(err);
        res.json({message: false});
    }
});

router.post('/getAllPosts', async (req, res)=>{
    try{
        const posts = await Post.findAll({
            include: {
                model:User,
                attributes: ['id', 'nick']
            },
            order: [['createdAt', 'DESC']]
        });
        console.log("=============================");
        console.log(posts);

        res.json({posts});
    }catch(err){
        console.log(err);
        res.json({message:false});
    }
});

router.post('/upload', async (req, res, next)=>{
    const content = req.body.content;
    const userId = req.body.id;
    const img = req.body.img;
    try{
        const post_result = await Post.create({
            content,
            userId,
            img
        });
        const hashtags = req.body.content.match(/#[^\s#]*/g);
        console.log(hashtags);
        if(hashtags){
            const hashtag_result = await Promise.all(hashtags.map((tag)=>
                {return Hashtag.findOrCreate({
                where: {title: tag.slice(1).toLowerCase()}
            });}));
            await post_result.addHashtags(hashtag_result.map((r)=>{return r[0]}));

        }
        //const posts = getAllPosts();
        res.json({message: true});

    }catch(err){
        res.json({message: false});
    }
});

module.exports=router;