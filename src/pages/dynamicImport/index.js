import React, { Component } from "react";

class DynamicImport extends Component {
  btnClick=()=> {
    import('./test').then((res)=> {
        alert("加载test文件，运行add函数，传参3,5，结果为：" + res.default(3,5))
    })
  }
  render() {
    return (
      <div>
        <h1>这里是dynamicImport, 另外router跳转文件用到了React.lazy & Suspense</h1>
        <div style={{marginTop: '50px'}}>
            <button onClick={this.btnClick}>点我看看，会不会动态加载文件</button>
        </div>
      </div>
    )
  }
}

export default DynamicImport;
