import React, { Component } from "react";
import { Button } from 'antd';

import { ThemeContext } from "./createContext"; 

class ThemedButton extends Component {
	static contextType = ThemeContext;

	render() {
		let props = this.props;
		let theme = this.context;
		console.log("props", props, "theme", theme);

		return (
			<Button 
				{...props} 
				style={{ margin: '10px', backgroundColor: theme.background }} 
			/>
		)
	}
}

export default ThemedButton;
