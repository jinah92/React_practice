import React, {Component} from "react";
import ToDoItems from "./ToDoItems";
import './css/ToDoList.css';
import $ from 'jquery';

class ToDoList extends Component {
    componentWillMount(){
        //render 전 서버 접속
        $.get('http://localhost:8080/', (returnData)=>{
            console.log(returnData.message);
        });
    }
    state={
        items: []
    }
    deleteItem=(key)=>{
        const sendParam = {key};
        $.post('http://localhost:8080/Item/delete', sendParam, (returnData)=>{
            if(returnData.message){
                const filteredItems = this.state.items.filter((item)=>{
                    return item.key !== key
                });
                this.setState({
                    items: filteredItems
                });
            } else{
                alert("일정 삭제 오류");
            }
        });
    }
    addItem=()=>{
        const sendParam = {
            text: this.inputE.value,
            key: Date.now()
        };
        $.post('http://localhost:8080/Item/add', sendParam, (returnData)=>{
            console.log(returnData.message);
            if(returnData.message){
                this.state.items.unshift(sendParam);
                this.setState({
                    items: this.state.items
                });
            } else{
                alert("일정 추가 오류");
            }
            console.log(this.state.items);
            this.inputE.value="";
            this.inputE.focus();
        });
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <input ref={ref=>this.inputE=ref}/>
                    <button onClick={this.addItem}>입력</button>
                </div>
                <ToDoItems entries={this.state.items} superDelete={this.deleteItem}/>
            </div>
        );
    }
}

export default ToDoList;