import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter, setThunkName } from '../actions';
import Link from '../components/Link';

const thunkAcitonFn = function(name) { //这里就是thunk，可以在这里面执行副作用操作
    return function(dispatch, getState) {
        const oldThunkName = getState().thunkName;
        setTimeout(()=> dispatch(setThunkName(name)), 2000);
        setTimeout(()=> dispatch(setThunkName(oldThunkName)), 4000);
    }
}


const FilterLink = (props) => {
    return (
        <div>
            <p>
            Show: <Link filter="SHOW_ALL" active={props.active} onClick={props.setClick}>全部</Link>
            {', '}
            <Link filter="SHOW_ACTIVE" active={props.active} onClick={props.setClick}>活跃的</Link>
            {', '}
            <Link filter="SHOW_COMPLETED" active={props.active} onClick={props.setClick}>删除的</Link>
            </p>
            <button onClick={()=> props.testThunk('新的thunk name')}>两秒后更新, 两秒后复原</button>
            <p>{props.thunkName}</p>
        </div>
    )
}



const mapStateToProps = (state) => {
    return ({
        active: state.visibilityFilter,
        thunkName: state.thunkName
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setClick: (filter) => dispatch(setVisibilityFilter(filter)),
        testThunk: (name)=> dispatch(thunkAcitonFn(name))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink)