// Class names of the 3 different pages that overlap should be renamed in order to
// avoid confusion and improve readability (Ex. 'Sky1' & 'Sky2')

require('font-awesome/css/font-awesome.css');
import React from 'react';
import ReactDOM from 'react-dom';
// Page 1
import Description from './page1/description.js';
import Sky from './page1/sky.js';
import Ground from './page1/ground.js';
// Page 2
import Sky2 from './page2/sky.js';
import Ground2 from './page2/ground.js';
// Page 3
import FAQ from './page3/faq.js';
import Sky3 from './page3/sky.js';
import Ground3 from './page3/ground.js';
// Page 4
import Sponsors from './page4/sponsors.js';
// Scrolling logic
import scroll from './scroll.js';
scroll.init();

class Page1 extends React.Component {
	render() {
		return (
			<div>
			<Sky />
			<Description />
			<div id="grass"/>
			<Ground />
      <i className="fa fa-fw fa-arrow-circle-o-right fa-5x"
        id="page1-arrow-right"
        onClick={scroll.scrollRight}></i>
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
      <i className="fa fa-fw fa-arrow-circle-o-left fa-5x"
        id="page2-arrow-left"
        onClick={scroll.scrollLeft}></i>
      <i className="fa fa-fw fa-arrow-circle-o-right fa-5x"
        id="page2-arrow-right"
        onClick={scroll.scrollRight}></i>
			</div>
		);
	}
}

class Page3 extends React.Component {
	render() {
		return (
			<div>
			<FAQ />
			<Sky3 />
			<Ground3 />
      <i className="fa fa-fw fa-arrow-circle-o-left fa-5x"
        id="page3-arrow-left"
        onClick={scroll.scrollLeft}></i>
      <i className="fa fa-fw fa-arrow-circle-o-right fa-5x"
        id="page3-arrow-right"
        onClick={scroll.scrollRight}></i>
			</div>
		);
	}
}

class Page4 extends React.Component {
	render() {
		return (
			<div>
			<Sponsors />
      <i className="fa fa-fw fa-arrow-circle-o-left fa-5x"
        id="page4-arrow-left"
        onClick={scroll.scrollLeft}></i>
			</div>
		);
	}
}

/* Is there a way to compress this to one render call? */
ReactDOM.render(<Page1 />, document.getElementById('page1'));
ReactDOM.render(<Page2 />, document.getElementById('page2'));
ReactDOM.render(<Page3 />, document.getElementById('page3'));
ReactDOM.render(<Page4 />, document.getElementById('page4'));
