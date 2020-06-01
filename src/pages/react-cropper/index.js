import React, { Component } from 'react';
import { Row, Col, Icon, Button, message } from 'antd';

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import testJpg from '../../assets/6.jpg';


class CropperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaling: 100,
      rotate: 0,
    };
  }

  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}

  onChange = (value) => {
    const prevValue = this.state.rotate;
    this.setState({
      rotate: value
    });
    if (value >= prevValue) {
      this.cropper.rotate(value - prevValue);
    } else {
      this.cropper.rotate(-(prevValue - value));
    }
  };

  ZoomIn = () => {
    this.setState((state) => ({
      scaling: state.scaling + 5
    }));
    this.cropper.zoom(0.05);
  };

  ZoomOut = () => {
    this.setState((state) => ({
      scaling: state.scaling - 5
    }));
    this.cropper.zoom(-0.05);
  };

  reset = () => {
    this.setState({
      scaling: 100
    });
    this.cropper.reset();
  };

  cropImage = (state) => {
    this.setState({
      scaling: 100,
      rotate: 0
    });
    if (state == 'open') {
      //this.props.openCrop();
    } else if (state == 'save') {
      if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
        message.error('没有裁剪到图片!');
        return;
      }
      const croppedImageData = this.cropper.getCroppedCanvas().toDataURL();
      alert('剪裁信息：' + croppedImageData);
      //this.props.saveOrCloseCrop(state, croppedImageData);
    } else if (state == 'close') {
      //this.props.saveOrCloseCrop(state, '');
    }
  };

  render() {
    const { detail } = this.props;

    return (
      <div>       
        <Cropper
          style={{ height: 550, width: '100%' }}
          //aspectRatio={16 / 9} //裁剪宽高比例
          guides={false}
          src={testJpg}
          ref={(cropper) => {
            this.cropper = cropper;
          }}
        />
        <Button type='primary' onClick={()=>this.cropImage('save')}>剪裁</Button>
      </div>
    );
  }
}

export default CropperComponent;
