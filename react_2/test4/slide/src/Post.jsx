import React, {Component} from "react";
import axios from 'axios';
import $ from 'jquery';

axios.defaults.withCredentials = true;
const headers = {withCredentials: true};

class Post extends Component {
    state = {
        posts: []
    }
    follow_user = async (nick)=>{
       const sendParam = {
           headers,
           followerId: $.cookie("login_id"),
           followingId: nick
       }
       try{
           const result = await axios.post('http://localhost:8080/post/following', sendParam);
           if(result.data.message){
               alert("팔로잉 추가 성공");
           } else{
               alert("팔로잉 추가 실패");
           }
           console.log(result);
       }catch(err){
            console.log(err);
       }
    }
    uploadPost = async ()=>{
        const sendParam = {
            headers,
            id: $.cookie("login_id"),
            content: this.postE.value,
            img: ''
        }
        try{
            await axios.post('http://localhost:8080/post/upload', sendParam);   //게시물 업로드 요청
            const result = await axios.post('http://localhost:8080/post/getAllPosts', headers);   //업로드된 모든 게시글 요청
            if(result.data.posts){
                this.setState({
                    posts: result.data.posts
                });
            }
            console.log(result);
        }catch(err){
            console.log(err);

        }
    }
    render(){
        const postStyle={
            width: 400,
            height: 150,
            borderStyle: "solid",
            borderColor: "lightblue",
            margin: 5
        }
        let posts = this.state.posts.map((post)=>{
            let nick = post.user.nick;
            let follow = <button onClick={()=>{this.follow_user(nick)}}>팔로우</button>;
            if($.cookie("login_nick") === nick){
                nick = '';
                follow = '';
            }
            return <div key={post.id} style={postStyle}>
                        {nick} {follow}<br/>
                        {post.content}
                </div> });
        return(
            <div>
                <h2>SNS Post</h2>
                <div>
                    <textarea ref={ref=>this.postE=ref} rows='5' cols='30'></textarea><br/>
                    <button>사진 업로드</button>
                    <button onClick={this.uploadPost}>쨱짹</button>
                </div>
                <div>
                    {posts}
                </div>
            </div>
        );
    }
}

export default Post;