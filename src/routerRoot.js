import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import moment from 'moment';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import 'moment/locale/zh-cn';

import './reset.css';
import SiderLayout from './layout/siderLayout';


moment.locale('zh-cn');

class RouterRoot extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<ConfigProvider locale={zhCN}>
						<Route path="/" component={SiderLayout} />
					</ConfigProvider>
				</Switch>
			</HashRouter>
		)
	}
}

export default RouterRoot;


