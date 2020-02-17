import React, {Component} from "react";
import "./css/Menu.css";
import $ from 'jquery';
import {NavLink, HashRouter} from 'react-router-dom';
import { } from "jquery.cookie";
import axios from 'axios';
axios.defaults.withCredentials = true;
const headers = {withCredentials: true};

class Menu extends Component {
    state={
        login_nick: "",
        loginStyle: "inline-block",
        logoutStyle: "none"
    }
    logout=()=>{
        axios.get('http://localhost:8080/member/logout',{
            headers
        }).then((returnData)=>{
            if(returnData.data.message){ //로그아웃 성공
                $.removeCookie("login_nick");
                $.removeCookie("login_id");
                this.setState({
                    login_nick: "",
                    loginStyle: "inline-block",
                    logoutStyle: "none"
                });
            }
        });  
    }
    login=()=>{
        const sendParm ={
            headers,
            nick: this.nick.value,
            password: this.password.value
        }
        axios.post('http://localhost:8080/member/login', sendParm)
        .then((returnData)=>{
            if(returnData.data.nick){ //로그인 성공
                $.cookie("login_nick", returnData.data.nick);
                $.cookie("login_id", returnData.data.id);
                this.setState({
                    login_nick: returnData.data.nick,
                    loginStyle: "none",
                    logoutStyle: "inline-block"
                });
            } else{
                alert("login failed");
            }
            this.nick.value="";
            this.password.value="";
            this.nick.focus();
        }); 
    }
    render(){
        const loginStyle={
            display: this.state.loginStyle
        }
        const logoutStyle={
            display: this.state.logoutStyle,
            paddingLeft: 50
        }
        let login_nick;
        if($.cookie("login_nick")){
            login_nick=$.cookie("login_nick");
            loginStyle.display="none";
            logoutStyle.display="inline-block";
        }

        var visibility = "hide";
        if(this.props.menuVisibility){
            visibility = "show";
        }
        return(
            <div id="flyoutMenu" onDrag={this.props.handleMouseDown} className={visibility}>
                <HashRouter>    
                <div style={loginStyle}>
                    e-mail<input ref={ref=>this.nick=ref}/><br/>
                    password<input type="password" ref={ref=>this.password=ref}/><br/>
                    <button onClick={this.login}>로그인</button>
                    <NavLink to="/contact">   
                        <button onClick={this.props.handleMouseDown}>회원가입</button>
                    </NavLink>
                </div>
                    <div style={logoutStyle}>
                        {login_nick}님, 접속
                        <button onClick={this.logout}>로그아웃</button>
                    </div>
                <h2><NavLink exact to="/" onClick={this.props.handleMouseDown}>Home</NavLink></h2>
                <h2><NavLink to ="/post" onClick={this.props.handleMouseDown}>Post</NavLink></h2>
                <h2><NavLink to ="/contact" onClick={this.props.handleMouseDown}>Contact</NavLink></h2>
                </HashRouter>
            </div>
        );
    }
}

export default Menu;