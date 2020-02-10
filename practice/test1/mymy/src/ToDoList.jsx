import React, {Component} from "react";
import ToDoItems from "./ToDoItems";

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
            text: this._Element.value,
            key: Date.now()
        })
        this.setState({
            items: this.state.items
        });
    }
    render(){
        return(
            <div>
                <div>
                    <input ref={ref=>this._Element=ref}/>
                    <button onClick={this.addItem}>추가</button>
                </div>
                    <ToDoItems entries={this.state.items} superDelete={this.deleteItem}/>
            </div>
        );
    }
}

export default ToDoList;