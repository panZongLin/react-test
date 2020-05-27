import React, {Component, Suspense, lazy} from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';

const Mainpage = lazy(()=> import('./mainpage'));
const DynamicImport = lazy(()=> import('./dynamicImport'));
const Context = lazy(()=> import('./context'));
const ForwardRef = lazy(()=> import('./forwardRef'));
const Form = lazy(()=> import('./form'));
const Hook = lazy(()=> import('./hook'));

const ReactRouter = lazy(()=> import('./reactRouter'));

const ReduxTest = lazy(()=> import('./reduxTest'));
const ReduxTodoList = lazy(()=> import('./reduxTodoList'));

const SagaTest = lazy(()=> import('./sagaTest'));

class RouterComponent extends Component{
  render() {
    return (
      <ErrorBoundary>
        <HashRouter>
          <Suspense fallback={<div>组件加载中...</div>}>
            <Switch>
              <Route path="/" exact component={Mainpage} />
              <Route path="/dynamicImport" component={DynamicImport} />     
              <Route path="/context" component={Context} />  
              <Route path="/forwardRef" component={ForwardRef} />   
              <Route path="/form" component={Form} />      
              <Route path="/hook" component={Hook} /> 
              <Route path="/reactRouterHome" component={ReactRouter} />
              <Route path="/reduxTest" component={ReduxTest} />  
              <Route path="/reduxTodoList" component={ReduxTodoList} />  
              <Route path="/sagaTest" component={SagaTest} />  
              <Redirect to="/" />             
            </Switch>
          </Suspense>
        </HashRouter>
      </ErrorBoundary>
    )
  }
}

export default RouterComponent;
