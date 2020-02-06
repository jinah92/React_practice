class Show_userInfo extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}

class Input_userInfo extends React.Component {
    state = {username: "test"};
    inputName = () => {
        this.setState({
            username: "test 2"
        });
    }
    render() {
        return (
            <div>
                <input type="button" onClick={this.inputName} value="input name"/>
                <Show_userInfo name={this.state.username} />
            </div>
        );
    }
}

ReactDOM.render(
    <Input_userInfo />, document.body
);