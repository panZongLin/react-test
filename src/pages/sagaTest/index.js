import React, {Component} from 'react';
import {Button} from 'antd';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

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
const reducers = combineReducers({count: countFn});


const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);



let cancelSubscribe = null;
class ReduxSagaTest extends Component {
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
                <h2 style={{marginBottom: 10}}>
                    count: {this.state.count}
                </h2>
                <Button onClick={this.addCount}>add</Button>
                <br />
                <Button onClick={this.reduceCount}>reduce</Button>
                <br />
                <Button onClick={this.addCountByAsync}>saga等2秒再执行add</Button>
            </div>
        )
    }
}

export default ReduxSagaTest;