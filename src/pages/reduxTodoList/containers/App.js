import React from 'react';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import FilterLink from './FilterLink';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <FilterLink />
    </div>
)

export default App;