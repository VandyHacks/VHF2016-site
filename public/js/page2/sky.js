import React from 'react';
import Image from '../image.js';

export default class Sky2 extends React.Component {
	render() {
		return(
			<div>
			<div className="mentor-description">
        Don't miss out on the opportunity to contribute to the hacking community by providing
        students with valuable guidance. Our mentors are an integral part of the VandyHacks
        experience. Not only will you be able to share your experience with creative and driven
        young hackers, but you'll also get free food and swag and FUN!<br />What better way to spend a
        weekend?
        <br></br>
        <a
          className="mentor-btn btn btn-primary btn-primary"
          href="https://goo.gl/forms/ZxxnP9bGZj7Tliet1"
          target="_blank"
        >
          Mentor
        </a>
			</div>
			</div>
		);
	}
}
