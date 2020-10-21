import React, {
    useState, useEffect, useContext, 
    useReducer, useCallback, useMemo, 
    useRef, useLayoutEffect, useDebugValue
} from 'react';
import {Button} from 'antd';
import { ThemeContext } from "../context/createContext";

//useLayoutEffect 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。

let timeCount = null;

const initialState = {value: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {value: state.value + 1};
    case 'decrement':
      return {value: state.value - 1};
    default:
      throw new Error();
  }
}


function Example() {
    const pRef = useRef(null);
    const [count, setCount] = useState(0);
    const [state111, dispatch] = useReducer(reducer, initialState); //dispatch({type: 'increment'})
    const value = useContext(ThemeContext);

    //如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数,
    //这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
    useEffect(()=> {
        console.log('执行effect')
        timeCount = setTimeout(()=>{
            setCount(count + 10);
            //setCount(prev=> prev+10)
            console.log('pRef.current', pRef.current);
        }, 2000)

        return function clear() {
            console.log('执行effect卸载回调')
            clearTimeout(timeCount)
        }
    }, []) 

    //只有当依赖项改变时，才会触发函数（useCallback的第一个参数），常用于性能优化
    useCallback(()=> {
        console.log('memoizedCallback', count);
    }, [count])()
 

    //只有当依赖项改变时，才会触发函数（useMemo的第一个参数），常用于性能优化
    const testuseMemo = function(c) {
        console.log('testuseMemo', c)
    }
    useMemo(() => testuseMemo(count), [count]);

    useDebugValue('useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签');
    return(
        <div>
            <h3 style={{marginBottom: 10}}>
                useContext获取到的value：{JSON.stringify(value)}
            </h3>
            <h3 style={{marginBottom: 10}} ref={pRef}>
                you click the btn {count} times
            </h3>
            <Button onClick={()=> setCount(0)}>重置</Button>
            <Button onClick={()=> setCount(count + 1)}>加 + 1</Button>
            <Button onClick={()=> setCount(prevCount => prevCount - 1)}>减 - 1</Button>
          
        </div>
    )
}

export default Example;