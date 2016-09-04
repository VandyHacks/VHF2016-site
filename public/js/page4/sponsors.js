import React from 'react';

export default class Sponsors extends React.Component {
	render() {
		return(
			<div>
			<p className="sponsors">Sponsors:</p>
			{/* Logos */}
			<img src="img/page4/bny.svg" className="logo5"/>
	    	<img src="img/page4/digital_reasoning.png" className="logo2"/>
			<img src="img/page4/capital_one.svg" className="logo6" />
			<img src="img/page4/seat_geek.png" className="logo8"/>
			<img src="img/page4/initial_state.png" className="logo3" />
			<img src="img/page4/launch_tn.png" className="logo4" />
			<img src="img/page4/thiel.png" className="logo7" />
    		<img src="img/page4/microsoft.svg" className="logo1"/>
    		<img src="img/page4/sticker_mule.png" className="logo9"/>
			<img src="img/page4/tree3.svg" className="sponsorTrees1 hidden-xs hidden-sm"/>
			<img src="img/page4/tree4.svg" className="sponsorTrees2 hidden-xs hidden-sm"/>
			<img src="img/page4/squirrel_and_laptop.svg" className="squirrelLaptop hidden-xs hidden-sm"/>
			</div>
		);
	}
}
