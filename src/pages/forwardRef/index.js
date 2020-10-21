import React, {Component} from 'react';
import {Button} from 'antd';
import InputElement from './Input';

//import HocForwardedRef from './HocForwardedRef';


class TestInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    foucs=()=> {
        this.inputRef.current.focus();
    }
    render() {
        return(
            <div>
                <h1>React.forwardRef</h1>
                <InputElement ref={this.inputRef} defaultValue={123456} />
                <Button onClick={this.foucs} style={{marginTop: '10px'}}>
                    获取焦点
                </Button>
            </div>
        )
    }
}

export default TestInput;