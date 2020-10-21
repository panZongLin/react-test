import React from "react";
import {Button} from 'antd';

const DynamicImport  = ()=> {
	const btnClick = ()=> {
		import('./fn').then((res) => {
			alert("加载文件，运行add函数，传参3,5，结果为：" +  res.default(3, 5))
		})
	}

	return (
		<div>
			<h2>动态import, 另外router部分使用了React.lazy & Suspense</h2>
			<div style={{ marginTop: '50px' }}>
				<Button type="primary" onClick={btnClick}>
					点我看看，会不会动态加载文件
				</Button>
			</div>
		</div>
	)	
}

export default DynamicImport;
