import React from 'react';
import Image from '../image.js'

export default class Registration extends React.Component {
	render() {
		return(
			<div className="registration">
        <a href="https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white" target="_blank" rel="noopen">
          <Image class="mlh-badge" path="img/page0/mlh-badge.svg" alt="Major League Hacking 2017 Hackathon Season"/>
        </a>
        <Image class="logo" path="img/VHLogo.svg"/>
        <h1 className="vandy-heading">VANDY<span className="trademark">&reg;</span>HACKS III</h1>
        <h2 className="hackathon-date">November 11 - 13 | Vanderbilt University </h2><br />
        <p className="cohosted-by">Cohosted by:</p>
        <Image class="cohost" path="img/page4/micro_strategy.png"/>
        <br />
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
