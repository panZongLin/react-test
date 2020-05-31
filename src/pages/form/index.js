import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '默认值'
        }
        this.inputRef = React.createRef();
        this.handleSubmit1 = this.handleSubmit1.bind(this);

        this.handleChanhe = this.handleChanhe.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);

        this.fileRef = React.createRef();
        this.handleSubmit3 = this.handleSubmit3.bind(this);
    }
    handleSubmit1(){
        console.log('this.inputRef', this.inputRef.current.value);
    }

    handleChanhe(e){
        this.setState({
            value: e.target.value
        });
    }
    handleSubmit2(){
        console.log('this.state.value', this.state.value);
    }

    handleSubmit3(){
        let fileInfo = this.fileRef.current.files[0];
        alert('name:'+ fileInfo.name + '\n' + 'size:' + fileInfo.size + '\n' + 'type:' + fileInfo.type)
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <p>非受控表单</p>
                    <form onSubmit={this.handleSubmit1}>
                        <label>name: <input type='text' ref={this.inputRef} /></label>
                        <input type='submit' value='Submit' />
                    </form>
                </div>
                <div>
                    <p>受控表单</p>
                    <form onSubmit={this.handleSubmit2}>
                        <label>name: <input type='text' value={this.state.value} onChange={(e)=>this.handleChanhe(e)} /></label>
                        <input type='submit' value='Submit' />
                    </form>
                </div>
                <div>
                    <p>文件表单</p>
                    <form onSubmit={this.handleSubmit3}>
                        <label>file: <input type='file' ref={this.fileRef} /></label>
                        <input type='submit' value='Submit' />
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Form;