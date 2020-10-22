const menuConfig = [
	{
		title: 'home',
		to: '/',
		icon: 'HomeOutlined'
	},
	{
		title: 'react',
		to: null,
		icon: 'BookOutlined',
		sub: [
			{
				title: 'DynamicImport',
				to: '/dynamicImport',
			},
			{
				title: 'Context',
				to: '/context',
			},
			{
				title: 'ForwardRef',
				to: '/forwardRef',
			},
			{
				title: 'Form',
				to: '/form',
			},
			{
				title: 'Hooks',
				to: '/hooks',
			}
		]
	},
	{
		title: 'react-router',
		to: '/reactRouter',
		icon: 'BookOutlined',
	},
	{
		title: 'redux',
		to: null,
		icon: 'BookOutlined',
		sub: [
			{
				title: 'ReduxTest',
				to: '/reduxTest',
			}
		]
	},
	{
		title: 'redux-saga',
		to: '/sagaTest',
		icon: 'BookOutlined',
	},
	{
		title: 'components',
		to: null,
		icon: 'BookOutlined',
		sub: [
			{
				title: 'react-zmage',
				to: '/react-zmage',
			},
			{
				title: 'react-cropper',
				to: '/react-cropper',
			},
			{
				title: 'react-draft-wysiwyg',
				to: '/react-draft-wysiwyg',
			}
		]
	},
]

export default menuConfig;