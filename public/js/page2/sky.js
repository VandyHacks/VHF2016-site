import React from 'react';
import Image from '../image.js';

export default class Sky2 extends React.Component {
	render() {
		return(
			<div>
			<Image path="img/cloud.svg" class="cloud hidden-xs hidden-sm"/>
			<div className="mentor-description">
				Founded in the spring of 2015, VandyHacks was the first collegiate
	          	hackathon to call the rockin' city of Nashville, Tennessee home.  Now, we're
	          	proud to bring you VandyHacks II- and it's gonna be even bigger and better. From
	          	October 2-4, 250+ students from universities all over the nation will meet at
	          	Vanderbilt University for a weekend of collaboration, innovation, and great food
	          	(#southernhospitality).
	          	We hope to see y'all there!
			</div>
			</div>
		);
	}
}
