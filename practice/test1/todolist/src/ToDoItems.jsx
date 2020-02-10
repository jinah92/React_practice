import React, {Component} from 'react';

class ToDoItems extends Component {
    subDelete=(key)=>{
       this.props.superDelete(key);
    }
    render(){
        const myList = this.props.entries.map((item)=>{
        return <li key={item.key} onClick={()=>this.subDelete(item.key)}>{item.text}</li>
        });
        return(
            <ul className="theList">
                {myList}
            </ul>
        );
    }
}

export default ToDoItems;