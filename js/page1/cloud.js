import React from 'react';

export default class Cloud extends React.Component {
	render() {
		return(
			<div>
			<img src={this.props.path} className={this.props.class}/>
			</div>
		);
	}
}

Cloud.propTypes = {
	path: React.PropTypes.string,
	class: React.PropTypes.string
}

Cloud.defaultProps = {
	path: 'styles/cloud.svg'
}