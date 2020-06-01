import React, { Component } from 'react';
import { 
    EditorState, 
    convertToRaw, 
    ContentState 
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import styles from './index.module.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


//读取，校验文件
const reader = function reader(file, options) {
  options = options || {};
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = function() {
      resolve(reader);
    };
    reader.onerror = reject;

    if (options.accept && !new RegExp(options.accept).test(file.type)) {
      reject({
        code: 1,
        msg: 'wrong file type',
      });
    }

    if (!file.type || /^text\//i.test(file.type)) {
      reader.readAsText(file);
    } else {
      reader.readAsDataURL(file);
    }
  });
};


//拼接参数
const parseParam = function parseParam(param, key) {
  let paramStr = '';
  if (typeof param === 'string' || typeof param === 'number' || typeof param === 'boolean') {
    paramStr += `&${key}=${encodeURIComponent(param)}`;
  } else {
    for (let i in param) {
      let k = key == null ? i : key + (param instanceof Array ? `[${i}]` : `.${i}`);
      paramStr += `&${parseParam(param[i], k)}`;
    }
  }
  return paramStr.substr(1);
};



const uploadCallback = function (file) {

  return new Promise(((resolve, reject) => {
    reader(file).then((reader) => {
      console.log('parseParam({ file: reader.result })', parseParam({ file: reader.result }));
      return fetch('http://192.168.0.100:8088/api/tzgg/upload', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'multipart/form-data;boundary=111',
        },

        body: parseParam({ file: reader.result }),
      });
    }).then(response => response.json()).then((json) => {
      resolve({ data: { link: json.data[0].url } });
    });
  }));
};



const uploadImageCallBack = function (file) {

  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://192.168.0.100:8088/api/tzgg/upload');
      // xhr.setRequestHeader('Access-Token', accessToken); //token·必须
      // xhr.setRequestHeader('dataType', 'formData'); //数据类型·必须
      //xhr.setRequestHeader('Content-Type', 'multipart/form-data;boundary=');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);

      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}

class EditorWysiwyg extends Component {
  state = {
    editorState: EditorState.createEmpty(), //实例
  }

  //编辑时
  onEditorStateChange=(editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(styles)
    return (
      <div>
        <div style={{width: '80%', margin: '0 auto'}}>
          <Editor
            editorState={editorState}
            wrapperClassName={styles.wrapper}
            editorClassName={styles.editor}
            localization={{ locale: 'zh' }} 
            toolbar={
              {
                fontFamily: { 
                  options: ['宋体', '黑体', '楷体', 
                    '微软雅黑','Arial',  'Georgia', 
                    'Impact', 'Tahoma', 'Times New Roman','Verdana']
                },
                image: { 
                  uploadCallback: uploadImageCallBack, 
                  alt: { present: true, mandatory: true } 
                },
              }
            }
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <textarea
          disabled
          style={{width: '100%', height: '100px', marginTop: '20px'}}
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}


export default EditorWysiwyg ;
