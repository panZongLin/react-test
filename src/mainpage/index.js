import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AA from './aa';

class MainPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      t: '111'
    }
  }
  render() {
    //throw new Error('I crashed!'); //测试错误边界
    return (
      <div>
        <h1>这里是首页</h1>
        <AA t={this.state.t} />
        <h1>该demo用于测试react react-router redux redux-thunk redux-saga 的基础特性</h1>
        <div style={{marginTop: '50px'}}>
          <ol>
            <li>react</li>
            <li> <Link to="/dynamicImport">dynamicImport</Link></li>
            <li> <Link to="/context">context</Link></li>
            <li> <Link to="/forwardRef">forwardRef</Link></li>
            <li> <Link to="/form">form</Link></li>
            <li> <Link to="/hook">hook</Link></li>
            <li></li>
            <li></li>
            <li>react-router</li>
            <li> <Link to="/reactRouterHome">reactRouterHome</Link></li>
            <li></li>
            <li></li>
            <li>redux&redux-thunk</li>
            <li> <Link to="/reduxTest">reduxTest</Link></li>
            <li> <Link to="/reduxTodoList">reduxTodoList</Link></li>
            <li></li>
            <li></li>
            <li>redux-saga</li>
            <li> <Link to="/sagaTest">sagaTest</Link></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default MainPage;
