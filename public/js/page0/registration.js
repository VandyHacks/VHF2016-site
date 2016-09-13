import React from 'react';
import Image from '../image.js'

export default class Registration extends React.Component {
	render() {
		return(
			<div className="registration">
        <Image class="logo" path="img/VHLogo.svg"/>
        <h1 className="vandy-heading">VANDY<span className="trademark">&reg;</span>HACKS III</h1>
        <h2 className="hackathon-date">November 11 - 13 | Vanderbilt University </h2><br />
        <div id = 'sub_text'></div>
        <div className="register-button-container">
          <a
            href="https://vandyhacks.typeform.com/to/RqdpnL"
            target="_blank" rel="noopen"
            className="register-btn btn btn-primary btn-primary"
          >
          <span className="register-btn-text">Apply</span>
          </a>
        </div>
        <ul className="soc">
          <li><a className="soc-facebook" href="https://www.facebook.com/vandyhacks" target="_blank" rel="noopen"></a></li>
          <li><a className="soc-twitter" href="https://twitter.com/vandyhacks" target="_blank" rel="noopen" ></a></li>
          <li><a className="soc-instagram" href="https://www.instagram.com/vandyhacks/" target="_blank" rel="noopen" ></a></li>
        </ul><br />
        <Image class="tree0-1 hidden-xs hidden-sm" path ="img/page0/tree1.svg"/>
        <Image class="tree0-2 hidden-xs hidden-sm" path="img/page0/tree2.svg"/>
        <Image class="tree0-3 hidden-xs hidden-sm" path="img/page0/tree1.svg"/>
        <Image class="tree0-4 hidden-xs hidden-sm" path="img/page0/tree3.svg"/>
        <Image class="squirrel0" path="img/squirrel.svg"/>
			</div>
		);
	}
}
