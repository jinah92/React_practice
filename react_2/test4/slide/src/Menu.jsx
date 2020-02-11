import React, {Component} from "react";
import "./css/Menu.css";
import $ from 'jquery';
import {Route} from 'react-router-dom';
import Contact from "./Contact";

class Menu extends Component {
    state={
        loginStyle: "inline-block",
        logoutStyle: "none"
    }
    newMember=()=>{
        return(
            <Route path="/contact" component={Contact}/>
        )
    }
    logout=()=>{
        $.get('http://localhost:8080/member/logout',{},(returnData)=>{
            if(returnData.message){
                this.setState({
                    loginStyle: "inline-block",
                    logoutStyle: "none"
                });
            }
        });
    }
    login=()=>{
        const sendParm ={
            email: this.email.value,
            pw: this.pw.value
        }
        $.post('http://localhost:8080/member/login', sendParm, (returnData)=>{
            if(returnData.message){
                this.setState({
                    loginStyle: "none",
                    logoutStyle: "inline-block"
                });
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
            display: this.state.logoutStyle
        }
        var visibility = "hide";
        if(this.props.menuVisibility){
            visibility = "show";
        }
        return(
            <div id="flyoutMenu" onDrag={this.props.handleMouseDown} className={visibility}>
                <div style={loginStyle}>
                    e-mail<input ref={ref=>this.email=ref}/><br/>
                    pw<input type="password" ref={ref=>this.pw=ref}/><br/>
                    <button onClick={this.login}>로그인</button>
                    <button onClick={this.newMember}>회원가입</button>
                </div>
                <div style={logoutStyle}>
                    <button onClick={this.logout}>로그아웃</button>
                </div>
                <h2><a href="/">Home</a></h2>
                <h2><a href="/">About</a></h2>
                <h2><a href="/">Contact</a></h2>
                <h2><a href="/">Search</a></h2>
            </div>
        );
    }
}

export default Menu;