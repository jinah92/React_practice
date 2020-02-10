import React, {Component} from 'react';
import TodoItems from './ToDoItems';

class ToDoList extends Component {
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
            text: this._element.value,
            key: Date.now()
        });
        this.setState({
            items: this.state.items
        });
        console.log(this.state.items);
        this._element.value="";
        this._element.focus();
    }
    render(){
        return(
            <div>
                <div>
                    <input ref={ref=>this._element=ref} />
                    <button onClick={this.addItem}>추가</button>
                </div>
                    <TodoItems entries={this.state.items} superDelete={this.deleteItem}/>
            </div>
        );
    }
}

export default ToDoList;