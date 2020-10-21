import React from 'react';
import {Input} from 'antd';

const InputElement = React.forwardRef((props, ref) => {
	return (
		<Input 
			ref={ref} 
			{...props}
			style={{width: '200px', float: 'left', margin: '10px', marginLeft: 0}}
		/>
	)
});
// function Input (props) {
//   return <input defaultValue='12345' />
// }

export default InputElement;