import React from 'react';

export default class Ground3 extends React.Component {
	render() {
		return(
			<div>
			{/* TODO: refactor & create general image component */}
			<img src="public/img/city.svg" className="city"/>
			<img src="public/img/confused_squirrel.svg" className="faqSquirrel"/>
			<img src="public/img/trees1.svg" className="trees1"/>
			<img src="public/img/trees2.svg" className="trees2"/>
			</div>
		);
	}
}