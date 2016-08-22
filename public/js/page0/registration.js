import React from 'react';
import Image from '../image.js'

export default class Registration extends React.Component {
	render() {
		return(
			<div className="hidden-xs hidden-sm">
        <Image class="cloud0-1" path="img/Cloud.svg"/>
        <Image class="logo" path="img/VHLogo.svg"/>
        <Image class="cloud0-2" path="img/Cloud.svg"/>
        <h1 className="vandy-heading">VANDY<span className="trademark">&reg;</span>HACKS III</h1>
        <h2 className="hackathon-date">November 11 - 13 | Vanderbilt University </h2><br />
        <div id = 'sub_text'></div>
        <div className="register-button-container">
          <a
            href="https://vandyhacks.typeform.com/to/RqdpnL"
            target="_blank"
            className="btn btn-primary btn-primary register-btn"
          >
          Register
          </a>
        </div>
        <ul className="soc">
          <li><a className="soc-facebook" href="https://www.facebook.com/vandyhacks" target="_blank"></a></li>
          <li><a className="soc-twitter" href="https://twitter.com/vandyhacks" target="_blank" ></a></li>
        </ul><br />
        <Image class="cloud0-3" path="img/Cloud.svg"/>
        <Image class="tree0-1" path ="img/Tree.svg"/>
        <Image class="tree0-2" path="img/Tree2.svg"/>
        <Image class="tree0-3" path="img/Tree.svg"/>
        <Image class="tree0-4" path="img/Tree3.svg"/>
        <Image class="squirrel" path="img/Squirrel.svg"/>
			</div>
		);
	}
}
