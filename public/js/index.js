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
if ($(window).width() > 768) {
	scroll.init();
}

class Navbar extends React.Component {
  render() {
    return (
      <div className="col-md-5 col-md-offset-5 text-center hidden-xs hidden-sm">
        <span className="navbar-btn" onClick={scroll.scrollToPage.bind(scroll, 0)}>Home</span>
        <span className="navbar-btn" onClick={scroll.scrollToPage.bind(scroll, 1)}>About</span>
        <span className="navbar-btn" onClick={scroll.scrollToPage.bind(scroll, 2)}>FAQ</span>
        <span className="navbar-btn" onClick={scroll.scrollToPage.bind(scroll, 3)}>Sponsors</span>
      </div>
    );
  }
}

class Page1 extends React.Component {
	render() {
		return (
			<div>
			<Sky />
			<Description />
			<div id="grass"/>
			<Ground />
			<i className="fa fa-fw fa-arrow-circle-o-right fa-5x hidden-xs hidden-sm"
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
			<i className="fa fa-fw fa-arrow-circle-o-left fa-5x hidden-xs hidden-sm"
				id="page2-arrow-left"
				onClick={scroll.scrollLeft}></i>
			<i className="fa fa-fw fa-arrow-circle-o-right fa-5x hidden-xs hidden-sm"
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
			<i className="fa fa-fw fa-arrow-circle-o-left fa-5x hidden-xs hidden-sm"
				id="page3-arrow-left"
        		onClick={scroll.scrollLeft}></i>
			<i className="fa fa-fw fa-arrow-circle-o-right fa-5x hidden-xs hidden-sm"
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
      		<i className="fa fa-fw fa-arrow-circle-o-left fa-5x hidden-xs hidden-sm"
        		id="page4-arrow-left"
        		onClick={scroll.scrollLeft}></i>
			</div>
		);
	}
}

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Page1 />, document.getElementById('page1'));
ReactDOM.render(<Page2 />, document.getElementById('page2'));
ReactDOM.render(<Page3 />, document.getElementById('page3'));
ReactDOM.render(<Page4 />, document.getElementById('page4'));
