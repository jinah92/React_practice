import React, {Component} from 'react';
import ToDoItems from './ToDoItems';
import "./css/ToDoList.css";

class ToDoList extends Component {
    state={
        items: []
    }
    deleteItem=(key)=>{
        alert("삭제 완료");
        const filteredItems = this.state.items.filter((item)=>{
            return item.key !== key     //삭제할 item을 제외한 리스트들을 리턴하여 변수에 저장(filteredItems)
        });
        this.setState({
            items: filteredItems        //items 갱신
        });            
    }
    addItem=()=>{
        this.state.items.unshift({
            text: this.inputElement.value,
            key: Date.now()
        });
        this.setState({
            items: this.state.items
        });
        console.log(this.state.items);
        this.inputElement.value = "";
        this.inputElement.focus();
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <input ref={ref=>this.inputElement=ref} placeholder="ENTER TASK"></input>
                    <button onClick={this.addItem}>add</button>
                </div>
                <ToDoItems entries={this.state.items} superDelete={this.deleteItem}/>
            </div>
        );
    }
}

export default ToDoList;