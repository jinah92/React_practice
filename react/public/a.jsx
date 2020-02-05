class Counter extends React.Component {
    render() {   //오버라이딩 (상속받는 메서드 render를 오버라이딩)
        return(
            <h1>{this.props.count}</h1>
        );
    }
}
class CounterParent extends React.Component {
    state={message:0};  //상태값
    a = ()=>{
        this.setState({ //setState 메소드 호출
            message: this.state.message + 1
        });           
    };
    render() {  //오버라이딩 (상속받는 메서드 render를 오버라이딩)
        return(
            <div>
                {/* 하위 태그로 상태값 지정 */}
                <Counter count={this.state.message} />
                <button onClick={this.a}> + </button>
            </div>
        );
    }
}

ReactDOM.render(    //render 메소드 호출
    <CounterParent />, document.body  //태그, 위치
);
