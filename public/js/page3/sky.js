import React from 'react';
import Cloud from '../page1/cloud.js';

export default class Sky3 extends React.Component {
	render() {
		return(
			<div className="hidden-xs hidden-sm">
			<Cloud path="img/cloud.svg" class="faqCloud1"/>
			<Cloud path="img/cloud.svg" class="faqCloud2"/>
			<Cloud path="img/cloud.svg" class="faqCloud3"/>
			</div>
		);
	}
}
