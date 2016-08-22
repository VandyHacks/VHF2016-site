import React from 'react';
import Image from '../image.js';

export default class Sky2 extends React.Component {
	render() {
		return(
			<div>
			<Image path="img/cloud.svg" class="cloud hidden-xs hidden-sm"/>
			<div className="mentor-description">
        Interested in participating as a mentor?
        Reach out to us <a href="mailto:info@vandyhacks.org">here</a>!
			</div>
			</div>
		);
	}
}
