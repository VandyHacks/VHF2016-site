import React from 'react';

export default class Sponsors extends React.Component {
	render() {
		return(
			<div>
			{/* Logos */}
			<a target="_blank" rel="noopener" href="https://www.microstrategy.com/us">
				<img src="img/page4/micro_strategy.png" className="micro-logo" />
			</a>
      		<a target="_blank" rel="noopener" href="https://www.bnymellon.com">
        		<img src="img/page4/bny.png" className="logo5" />
      		</a>
      		<a target="_blank" rel="noopener" href="http://www.centene.com/">
        		<img src="img/page4/centene_logo.png" className="centene-logo" />
      		</a>
			<a target="_blank" rel="noopener" href="http://www.digitalreasoning.com/">
	    		<img src="img/page4/digital_reasoning.png" className="logo2"/>
      		</a>
			<a target="_blank" rel="noopener" href="https://www.capitalone.com/">
			  <img src="img/page4/capital_one.svg" className="logo6" />
      		</a>
      		<a target="_blank" rel="noopener" href="https://seatgeek.com">
			  <img src="img/page4/seat_geek.png" className="logo8"/>
      		</a>
			<a target="_blank" rel="noopener" href="https://www.initialstate.com/">
			  <img src="img/page4/initial_state.png" className="logo3" />
      		</a>
			<a target="_blank" rel="noopener" href="http://launchtn.org/">
			  <img src="img/page4/launch_tn.png" className="logo4" />
      		</a>
			<a target="_blank" rel="noopener" href="http://thielfellowship.org/">
			  <img src="img/page4/thiel.png" className="logo7" />
      		</a>
      		<a target="_blank" rel="noopener" href="https://www.stickermule.com/">
    			<img src="img/page4/sticker_mule.png" className="logo9"/>
      		</a>
      		<p className="sponsors">Interested in sponsoring VandyHacks?<br />Reach out to us at sponsors@vandyhacks.org</p>
			<img src="img/page4/tree3.svg" className="sponsorTrees1 hidden-xs hidden-sm"/>
			<img src="img/page4/tree4.svg" className="sponsorTrees2 hidden-xs hidden-sm"/>
			<img src="img/page4/squirrel_and_laptop.svg" className="squirrelLaptop hidden-xs hidden-sm"/>
			</div>
		);
	}
}
