import React from 'react';

export default class Sky2 extends React.Component {
	render() {
		return(
			<div>
			<img src="img/cloud.svg" className="cloud hidden-xs hidden-sm"/>
			<div className="description">
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
