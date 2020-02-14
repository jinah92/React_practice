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
        login_email: "",
        loginStyle: "inline-block",
        logoutStyle: "none"
    }
    logout=()=>{
        axios.get('http://localhost:8080/member/logout',{
            headers
        }).then((returnData)=>{
            if(returnData.data.message){ //로그아웃 성공
                $.removeCookie("login_name");
                this.setState({
                    login_email: "",
                    loginStyle: "inline-block",
                    logoutStyle: "none"
                });
            }
        });  
    }
    login=()=>{
        const sendParm ={
            headers,
            email: this.email.value,
            pw: this.pw.value
        }
        axios.post('http://localhost:8080/member/login', sendParm)
        .then((returnData)=>{
            if(returnData.data.message){ //로그인 성공
                $.cookie("login_name", returnData.data.message);
                this.setState({
                    login_email: returnData.data.message,
                    loginStyle: "none",
                    logoutStyle: "inline-block"
                });
            } else {
                alert("login failed");
            }
            this.email.value="";
            this.pw.value="";
            this.email.focus();
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
        let login_name;
        if($.cookie("login_name")){
            login_name=$.cookie("login_name");
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
                    e-mail<input ref={ref=>this.email=ref}/><br/>
                    pw<input type="password" ref={ref=>this.pw=ref}/><br/>
                    <button onClick={this.login}>로그인</button>
                    <NavLink to="/contact">   
                        <button onClick={this.props.handleMouseDown}>회원가입</button>
                    </NavLink>
                </div>
                    <div style={logoutStyle}>
                        {login_name}님, 접속
                        <button onClick={this.logout}>로그아웃</button>
                    </div>
                <h2><NavLink exact to="/" onClick={this.props.handleMouseDown}>Home</NavLink></h2>
                <h2><NavLink to ="/stuff" onClick={this.props.handleMouseDown}>Stuff</NavLink></h2>
                <h2><NavLink to ="/contact" onClick={this.props.handleMouseDown}>Contact</NavLink></h2>
                </HashRouter>
            </div>
        );
    }
}

export default Menu;