

//测试thunk的reducer
const setThunkName = (state = '默认thunk name', action) => {
    switch (action.type) {
        case 'SET_THUNK_NAME':
            return action.name
        default:
            return state
    }
}


export default setThunkName;