import React, { Component } from "react";

import { ThemeContext, themes } from "./theme-context";
import ThemedButton from './themed-button';


class contextTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme : themes.light
        }
    }

    toggleTheme=()=> {
        let theme = this.state.theme;
        this.setState({
            theme: theme===themes.dark ? themes.light : themes.dark
        })
    }

    render() {
        return (
            <div>
              <h2>测试context, btn1和btn2都使用contextType注册</h2>
              <h2>但是btn1被Provider包裹且value值为light，而btn2使用createContext中的默认值dark</h2>
              <ThemeContext.Provider value={this.state.theme}>
                <ThemedButton onClick={this.toggleTheme}> 按钮1 Theme light </ThemedButton>
              </ThemeContext.Provider>
              <div>
                <ThemedButton> 按钮2 theme dark </ThemedButton>
              </div>
            </div>
        )
    }
}

export default contextTest;