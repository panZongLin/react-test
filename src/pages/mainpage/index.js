import React, {useState} from 'react';
import TestProps from './TestProps';

const eleSty = {
	color: '#f00',
	fontSize: '16px',
	lineHeight: '30px',
}

const Mainpage = ()=> {
	const [title, setTitle] = useState('简约而不简单');
	const ele = React.createElement(
		'p',
		{style: eleSty},
		'\(^o^)/'
	)
	const cloneEle = (element)=> {
		//console.log('element', element)
		return(
			React.cloneElement(
				element,
				{style: {...element.props.style, color: '#54ff00'}},
				<p>(꒦_꒦) </p>
			)
		)
	}
	// https://juejin.im/post/6885162791632633870
	return (
		<div style={{textAlign: 'center'}}>
			{ele}
			{cloneEle(ele)}
			<TestProps t={1} />
			<p style={eleSty} onClick={()=> setTitle('发现隐藏关卡，获得屠龙刀一把')}>
				{title}
			</p>						
		</div>
	)
}

export default Mainpage;