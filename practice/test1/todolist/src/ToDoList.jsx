import React, {Component} from 'react';
import ToDoItems from './ToDoItems';

class ToDoList extends Component{
    state={
        items: []
    }
    deleteItem=(key)=>{
        const filteredItems = this.state.items.filter((item)=>{
            return item.key !== key
        });
        this.setState({
            items: filteredItems
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
        this.inputElement.value="";
        this.inputElement.focus();
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <input ref={ref=>this.inputElement=ref} placeholder="입력해주세요"/>
                    <button onClick={this.addItem}>추가하기</button>
                </div>
                <ToDoItems entries={this.state.items} superDelete ={this.deleteItem}/>
            </div>
        );
    }
}

export default ToDoList;