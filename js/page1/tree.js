import React from 'react';

export default class Tree extends React.Component {
	render() {
		return (
			<div>
			<img src={this.props.path} className={this.props.class}/>
			</div>
		);
	}
}

Tree.propTypes = {
		path: React.PropTypes.string,
		class: React.PropTypes.string
}