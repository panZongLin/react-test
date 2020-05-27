import React, {Component} from 'react';
import HOCFnAddRef from './HOCFnAddRef';
import Input from './Input';


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
                <h1>refs转发</h1>
                <Input ref={this.inputRef} />
                <button onClick={this.foucs}>获取焦点</button>
            </div>
        )
    }
}

export default TestInput;