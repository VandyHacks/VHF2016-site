// Class names of the 3 different pages that overlap should be renamed in order to
// avoid confusion and improve readability (Ex. 'Sky1' & 'Sky2')

import React from 'react';
import ReactDOM from 'react-dom';
// Page 1
import Description from './page1/description.js';
import Sky from './page1/sky.js';
import Ground from './page1/ground.js';
// Page 2
import Sky2 from './page2/sky.js';
import Ground2 from './page2/ground.js';


class Page1 extends React.Component {
	render() {
		return (
			<div>
			<Sky />
			<Description />
			<div id="grass"/>
			<Ground />
	        </div>
		);
	}
}

class Page2 extends React.Component {
	render() {
		return (
			<div>
			<Sky2 />
			<Ground2 />
			</div>
		);
	}
}

class Page3 extends React.Component {
	render() {
		return (
			<div>
			Page 3
			</div>
		);
	}
}

/* Is there a way to compress this to one render call? */
ReactDOM.render(<Page1 />, document.getElementById('page1'));
ReactDOM.render(<Page2 />, document.getElementById('page2'));
ReactDOM.render(<Page3 />, document.getElementById('page3'));

