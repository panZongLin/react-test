import React, { Component } from 'react';
import Zmage from 'react-zmage'
import A from "../../assets/6.jpg";
import B from "../../assets/7.jpg";
import C from "../../assets/8.jpg";

class ZmageComponent extends Component {

	render() {

		return (
			<div>
				<div style={{ width: '400px', height: '400px' }}>
					<Zmage
						src={A}
						alt="展示序列图片"
						set={[{
							src: A,
							alt: "First image description"
						}, {
							src: B,
							alt: "First image description"
						}, {
							src: C,
							alt: "Second image description"
						}]}
						style={{ width: '100%', height: '100%' }}
					/>
				</div>
			</div>
		)
	}
}


export default ZmageComponent;
