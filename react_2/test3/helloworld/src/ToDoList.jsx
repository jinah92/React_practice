import React, {Component} from 'react';

class ToDoList extends Component {
    render(){
        return(
            <div>
                <div>
                    <input placeholder="ENTER TASK"></input>
                    <button>add</button>
                </div>
            </div>
        );
    }
}