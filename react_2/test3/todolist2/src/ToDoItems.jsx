import React, {Component} from "react";
import './css/ToDoList.css';

class ToDoItems extends Component {
    
    render(){
        const myList = this.props.entries.map((item)=>{
            return <li key={item.key} onClick={this.props.superDelete.bind(null, item.key)}>{item.text}</li>
        });
        return(
            <ul className="theList">
                {myList}
            </ul>
        );
    }
}

export default ToDoItems;