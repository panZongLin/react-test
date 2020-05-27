import React, {
    useState, useEffect, useContext, 
    useReducer, useCallback, useMemo, 
    useRef, useLayoutEffect, useDebugValue
} from 'react';
import { ThemeContext } from "../context/theme-context";

let timeCount = null;
function Example() {

    const pRef = useRef(null);
    const [count, setCount] = useState(0);
    useEffect(()=> {
        console.log('执行effect')
        timeCount = setTimeout(()=>{
            setCount(count + 10);
            console.log('pRef.current', pRef.current);
        }, 2000)

        return function clear() {
            clearTimeout(timeCount)
        }
    }, []) 
    //如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数,
    //这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。

    const value = useContext(ThemeContext);

    const memoizedCallback = useCallback(()=> {
        console.log('memoizedCallback', count);
    }, [count])
    memoizedCallback(); 

    const testuseMemo = function(c) {
        console.log('testuseMemo', c)
    }
    const memoizedValue = useMemo(() => testuseMemo(count), [count]);
    console.log('memoizedValue', memoizedValue)


    useDebugValue('useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签');
    return(
        <div>
            <p ref={pRef}>you click the btn {count} times</p>
            <button onClick={()=> setCount(0)}>重置</button>
            <button onClick={()=> setCount(count + 1)}>加 + 1</button>
            <button onClick={()=> setCount(prevCount => prevCount - 1)}>减 - 1</button>

            <p>useContext获取到的value：{JSON.stringify(value)}</p>
        </div>
    )
}

export default Example;


// const initialState = {count: 0};
// function init(initialState) {
//     return initialState
// } 
// function reducer(state, action) {
//     switch (action.type) {
//         case 'add':
//             return {count: state.count + 1};
//         case 'reduce':
//             return {count: state.count - 1};
//         case 'reset':
//             return init(action.payload);
//         default:
//             throw new Error('未找到对应type');
//     }
// }

// function Example2 () {
//     const [state, dispatch] = useReducer(reducer, initialState, init); //第三个参数会覆盖第二个默认参数
//     console.log('state', state)
//     return(
//         <div>
//             <p>count: {state.count}</p>
//             <button onClick={()=> dispatch({type: 'reset', payload: initialState})}>重置</button>
//             <button onClick={()=> dispatch({type: 'add'})}>加 + 1</button>
//             <button onClick={()=> dispatch({type: 'reduce'})}>减 - 1</button>
//             <button onClick={()=> dispatch({type: 'xxx'})}>触发报错</button>
//         </div>
//     )
// }

// export default Example2;