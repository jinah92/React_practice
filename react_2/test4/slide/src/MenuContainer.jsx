import React, {Component} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import {Route, NavLink, HashRouter} from "react-router-dom";

class MenuContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    handleMouseDown(e){
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }
    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        });
    }
    render(){
        return(
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>   {/*exact : 경로가 완전히 일치할때를 지정 */}
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>    {/*exact : 경로가 완전히 일치할때를 지정 */}
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
                </HashRouter>
            </div>
        );
    }
}

export default MenuContainer;