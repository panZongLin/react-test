import React, { lazy } from 'react';

const Mainpage = lazy(() => import('../pages/mainpage'));
const DynamicImport = lazy(() => import('../pages/dynamicImport'));
const Context = lazy(() => import('../pages/context'));
const ForwardRef = lazy(() => import('../pages/forwardRef'));
const Form = lazy(() => import('../pages/form'));
const Hooks = lazy(() => import('../pages/hooks'));

const ReactRouter = lazy(() => import('../pages/reactRouter'));

const ReduxTest = lazy(() => import('../pages/reduxTest'));

const SagaTest = lazy(() => import('../pages/sagaTest'));

const ReactZmage = lazy(() => import('../pages/react-zmage'));
const ReactCropper = lazy(() => import('../pages/react-cropper'));
const ReactDraftWysiwyg = lazy(() => import('../pages/react-draft-wysiwyg'));

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
		path: '/sagaTest',
		component: SagaTest
	},
	{
		path: '/react-zmage',
		component: ReactZmage
	},
	{
		path: '/react-cropper',
		component: ReactCropper
	},
	{
		path: '/react-draft-wysiwyg',
		component: ReactDraftWysiwyg
	},
]

export default routerConfig;