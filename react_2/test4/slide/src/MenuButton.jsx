import React, {PureComponent} from "react";
import './css/MenuButton.css';

class MenuButton extends PureComponent {
    render(){
        return(
            <button id="roundButton"
                    onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;