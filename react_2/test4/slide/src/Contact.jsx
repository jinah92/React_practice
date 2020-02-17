import React, {Component} from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = {withCredentials: true};

class Contact extends Component {
    state = {
        name: ''
    }
    memberInsert=()=>{
        const sendParam={
            headers,
            name: this._nameE.value,
            email: this._emailE.value,
            pw: this._pwE.value,
            comments: this._commentE.value
        }
        axios.post('http://localhost:8080/member/insert', sendParam)
        .then((returnData)=>{     //정상 수행시 콜백함수
            if(returnData.data.message){
                this.setState({
                    name: returnData.data.message
                });
            }else{
                alert("회원가입 거부");
            }
        })
        .catch((err)=>{    //오류 발생시 콜백함수
            console.log(err);
        })
    }
    render(){
        if(this.state.name){
            return(
                <div>
                    <h2>{this.state.name}님 회원가입되었습니다.</h2>
                </div>
            );
        } else{
            return(
                <div>
                    <h2>Contact</h2>
                    <p>회원가입</p>
                    <input ref={ref=>this._nameE=ref} placeholder="Name"/><br/>
                    <input ref={ref=>this._emailE=ref} placeholder="E-mail"/><br/>
                    <input ref={ref=>this._pwE=ref} type="password" placeholder="Password"/><br/>
                    <input ref={ref=>this._commentE=ref} placeholder="Comments"/><br/>
                    <button onClick={this.memberInsert}>회원등록</button>
                </div>
            );
        }
    }
            
}

export default Contact;