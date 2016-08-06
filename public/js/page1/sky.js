import React from 'react';
import Cloud from './cloud.js'

export default class Sky extends React.Component {
	render() {
		return (
			<div className="hidden-xs hidden-sm">
			<Cloud class="cloud1"/>
			<Cloud class="cloud2"/>
			<Cloud class="cloud3"/>
			</div>
		);
	};
}