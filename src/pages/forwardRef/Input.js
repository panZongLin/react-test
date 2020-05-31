import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return  <input ref={ref} defaultValue='12345' />
});
// function Input (props) {
//   return <input defaultValue='12345' />
// }

export default Input;