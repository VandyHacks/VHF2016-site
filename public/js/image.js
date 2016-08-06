import React from 'react';

export default class Image extends React.Component {
	render() {
		return (
			<div>
			<img src={this.props.path} className={this.props.class}/>
			</div>
		);
	}
}

Image.propTypes = {
		path: React.PropTypes.string,
		class: React.PropTypes.string
}
