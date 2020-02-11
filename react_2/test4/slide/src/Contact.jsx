import React, {Component} from "react";

class Contact extends Component {
    newMember=()=>{
        alert();
    }
    render(){
        return(
            <div>
                <h2>Contact</h2>
                <p>회원가입</p>
                <input placeholder="Name"/><br/>
                <input type="password" placeholder="Password"/><br/>
                <input placeholder="E-mail"/><br/>
                <input placeholder="Comments"/><br/>
                <button onClick={this.newMember}>회원등록</button>
            </div>
        );
    }
}

export default Contact;