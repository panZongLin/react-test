import React from 'react';

const TestProps = (props)=> {
    //props.t = 2;
    //TypeError: Cannot assign to read only property 't' of object '#<Object>'
    console.log('TestProps 组件被触发')
    return null;
}

export default React.memo(TestProps);