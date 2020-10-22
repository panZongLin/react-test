import React, {Component} from 'react';
import {Button} from 'antd';
import {combineReducers, createStore, applyMiddleware} from 'redux';

const COUNT = 0;
function countFn(state=COUNT, action) {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'reduce':
            return state -1;
        default:
            return state;
    }
}

const BOOL = true;
function toggleFn(state=true, action) {
    switch (action.type) {
        case 'right':
            return BOOL;
        case 'wrong':
                return !BOOL;
        default:
            return state;
    }
}


const reducer = combineReducers({count: countFn, bool: toggleFn})
let store = createStore(reducer, applyMiddleware());
{/* <Provider store={store}>
    <App />
</Provider> */}

let cancelSubscribe = null;
class ReduxTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: COUNT,
            bool: BOOL,
            listerStatus: true
        }
    }
    componentDidMount() {
        this.addLister();
    }
    addCount=()=> {
        store.dispatch({type: 'add'});
    }
    reduceCount=()=> {
        store.dispatch({type: 'reduce'});
    }
    handleToggle=()=> {
        if(this.state.bool) {
            store.dispatch({type: 'wrong'});
        }else{
            store.dispatch({type: 'right'});
        }
    }

    addLister=()=> {
        this.setState({
            listerStatus: true
        })
        cancelSubscribe = store.subscribe(()=>{
            console.log('store.getState()', store.getState())
            this.setState({
                count: store.getState().count,
                bool: store.getState().bool,
            });
        })
    }
    cancelLister=()=> {
        cancelSubscribe();
        this.setState({
            listerStatus: false
        })
    }

    render(){
        return(
            <div>
                <h2>count: {this.state.count}</h2>
                <h2>bool: {JSON.stringify(this.state.bool)}</h2>

                <div style={{marginTop: 10}}>
                    <Button onClick={this.addCount}>+1</Button>
                    <Button onClick={this.reduceCount}>-1</Button>
                </div>
                <div style={{marginTop: 10}}>
                    <Button onClick={this.handleToggle}>toggle</Button>
                </div>               
                <div style={{marginTop: 10}}>
                    <Button onClick={this.state.listerStatus ? this.cancelLister : this.addLister}>
                        {this.state.listerStatus ? '取消' : '添加'}store监听
                    </Button>
                </div>                
            </div>
        )
    }
}

export default ReduxTest;