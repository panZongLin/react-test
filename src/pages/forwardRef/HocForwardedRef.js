import React from 'react';

function HocForwardedRef(Component) {
	class Base extends React.Component {
		//do something...

		render() {
			const { forwardedRef, ...rest } = this.props;
			return <Component ref={forwardedRef} {...rest} />;
		}
	}

	return React.forwardRef((props, ref) => {
		//console.log('HocForwardedRef:', props, ref)
		return <Base {...props} forwardedRef={ref} />;
	});
}

export default HocForwardedRef;