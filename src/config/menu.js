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
      },
      {
        title: 'ReduxTodoList',
        to: '/reduxTodoList',
      },
    ]
  },
  {
    title: 'redux-saga',
    to: '/sagaTest', 
    icon: 'BookOutlined',
  },
]

export default menuConfig;