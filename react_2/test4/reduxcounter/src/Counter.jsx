import React, {Component} from "react";
class Counter extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.decreaseCount}>-</button>
                <span>{this.props.countValue}</span>
                <button onClick={this.props.increaseCount}>+</button>
            </div>
        );
    }
}

export default Counter;