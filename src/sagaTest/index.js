import React, {Component} from 'react';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga/rootSaga';

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

//combineReducers reducers
const reducers = combineReducers({count: countFn});
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
//create store
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
//run saga
sagaMiddleware.run(rootSaga);



let cancelSubscribe = null;
class ReduxTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: COUNT,
        }
    }
    componentDidMount() {
        cancelSubscribe = store.subscribe(()=>{
            this.setState({
                count: store.getState().count,
            });
        })
    }
    addCount=()=> {
        store.dispatch({type: 'add'});
    }
    reduceCount=()=> {
        store.dispatch({type: 'reduce'});
    }

    addCountByAsync=()=> {
        store.dispatch({type: 'addByAsync'});
    }

    render(){
        return(
            <div>
                <h2>count: {this.state.count}</h2>
                <button onClick={this.addCount}>add</button>
                <button onClick={this.reduceCount}>reduce</button>
                <br />
                <button onClick={this.addCountByAsync}>saga等2秒再执行add</button>
            </div>
        )
    }
}

export default ReduxTest;