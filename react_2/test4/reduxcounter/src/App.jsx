import {connect} from "react-redux";
import Counter from './Counter';

function mapStateToProps(state){
    return {
        countValue: state.count
    };
}

const increaseAction = {type: "increase"};
const decreaseAction = {type: "decrease"};

function mapDispatchToProps(dispatch){
    return {
        increaseCount: function(){
            return dispatch(increaseAction);
        },
        decreaseCount: function(){
            return dispatch(decreaseAction);
        }
        
    };
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connectedComponent;