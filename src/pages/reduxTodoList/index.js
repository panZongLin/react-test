import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './containers/App';

const store = createStore(rootReducer, applyMiddleware(thunk));

class ReduxTodoList extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default ReduxTodoList;
