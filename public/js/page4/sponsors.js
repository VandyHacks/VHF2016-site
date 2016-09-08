import React from 'react';

export default class Sponsors extends React.Component {
	render() {
		return(
			<div>
			{/* Logos */}
      <a href="https://www.bnymellon.com">
        <img src="img/page4/bny.svg" className="logo5" />
      </a>
      <a href="http://www.centene.com/">
        <img src="img/page4/centene_logo.jpg" className="centene_logo" />
      </a>
			<a href="http://www.digitalreasoning.com/">
	    	<img src="img/page4/digital_reasoning.png" className="logo2"/>
      </a>
			<a href="https://www.capitalone.com/">
			  <img src="img/page4/capital_one.svg" className="logo6" />
      </a>
      <a href="https://seatgeek.com">
			  <img src="img/page4/seat_geek.png" className="logo8"/>
      </a>
			<a href="https://www.initialstate.com/">
			  <img src="img/page4/initial_state.png" className="logo3" />
      </a>
			<a href="http://launchtn.org/">
			  <img src="img/page4/launch_tn.png" className="logo4" />
      </a>
			<a href="http://thielfellowship.org/">
			  <img src="img/page4/thiel.png" className="logo7" />
      </a>
      <a href="https://www.stickermule.com/">
    		<img src="img/page4/sticker_mule.png" className="logo9"/>
      </a>
			<img src="img/page4/tree3.svg" className="sponsorTrees1 hidden-xs hidden-sm"/>
			<img src="img/page4/tree4.svg" className="sponsorTrees2 hidden-xs hidden-sm"/>
			<img src="img/page4/squirrel_and_laptop.svg" className="squirrelLaptop hidden-xs hidden-sm"/>
			</div>
		);
	}
}
