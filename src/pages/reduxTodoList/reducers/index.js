import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import thunkName from './setThunkName';

export default combineReducers({
    todos,
    visibilityFilter,
    thunkName
});