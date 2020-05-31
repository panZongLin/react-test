import React, {lazy} from 'react';

const Mainpage = lazy(()=> import('../pages/mainpage'));
const DynamicImport = lazy(()=> import('../pages/dynamicImport'));
const Context = lazy(()=> import('../pages/context'));
const ForwardRef = lazy(()=> import('../pages/forwardRef'));
const Form = lazy(()=> import('../pages/form'));
const Hooks = lazy(()=> import('../pages/hooks'));

const ReactRouter = lazy(()=> import('../pages/reactRouter'));

const ReduxTest = lazy(()=> import('../pages/reduxTest'));
const ReduxTodoList = lazy(()=> import('../pages/reduxTodoList'));

const SagaTest = lazy(()=> import('../pages/sagaTest'));

const routerConfig = [
  {
    path: '/',
    component: Mainpage
  },
  {
    path: '/dynamicImport',
    component: DynamicImport
  },
  {
    path: '/context',
    component: Context
  },
  {
    path: '/forwardRef',
    component: ForwardRef
  },
  {
    path: '/form',
    component: Form
  },
  {
    path: '/hooks',
    component: Hooks
  },
  {
    path: '/reactRouter',
    component: ReactRouter
  },
  {
    path: '/reduxTest',
    component: ReduxTest
  },
  {
    path: '/reduxTodoList',
    component: ReduxTodoList
  },
  {
    path: '/sagaTest',
    component: SagaTest
  },
]

export default routerConfig;