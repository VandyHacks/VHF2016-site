import React from 'react';
import Cloud from '../page1/cloud.js';

export default class Sky3 extends React.Component {
	render() {
		return(
			<div>
			<Cloud path="public/img/cloud.svg" class="faqCloud1"/>
			<Cloud path="public/img/cloud.svg" class="faqCloud2"/>
			<Cloud path="public/img/cloud.svg" class="faqCloud3"/>
			</div>
		);
	}
}