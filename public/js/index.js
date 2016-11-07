require('font-awesome/css/font-awesome.css');
import React from 'react';
import ReactDOM from 'react-dom';
// Page 0
import Registration from './page0/registration.js';
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
import Constants from './constants.js';
// Page 4
import Sponsors from './page4/sponsors.js';
// Page 5
import Partners from './page5/partners.js';
// Scrolling logic
import scroll from './scroll.js';
if ($(window).width() > 768) {
	scroll.init();
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <span className="navbar-logo navbar-btn" id="nav0" onClick={scroll.scrollToPage.bind(scroll, 0)}>VH</span>
        <span className="navbar-btn" id="nav1" onClick={scroll.scrollToPage.bind(scroll, 1)}>About</span>
        <span className="navbar-btn" id="nav2" onClick={scroll.scrollToPage.bind(scroll, 2)}>Mentors</span>
        <span className="navbar-btn" id="nav3" onClick={scroll.scrollToPage.bind(scroll, 3)}>FAQ</span>
        <span className="navbar-btn" id="nav4" onClick={scroll.scrollToPage.bind(scroll, 4)}>Sponsors</span>
        <span className="navbar-btn" id="nav5" onClick={scroll.scrollToPage.bind(scroll, 5)}>Partners</span>
        <span className="navbar-btn navbar-apply" id="nav6">
        <div className="dropdown">
          <button className="navbar-dropdown btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Useful links
             <span className="caret"></span>
          </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a
                  href="https://drive.google.com/file/d/0B4-ckENnV54DSEhnNG9nTE5QbGM/view"
                  target='_blank'
                >Schedule</a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1N_3l4F5F1ueKTTgOT4zK-5K-Qy664Epch4lik5d59BY/edit"
                  target='_blank'
                >Reimbursement Info</a>
              </li>
            </ul>
        </div>
        </span>
      </div>
    );
  }
}

class Page0 extends React.Component {
  render() {
    return (
      <div>
      <Registration />
			<i className="fa fa-fw fa-arrow-circle-o-right fa-4x hidden-xs hidden-sm"
				id="page0-arrow-right"
				onClick={scroll.scrollRight}></i>
      </div>
    );
  }
}

class Page1 extends React.Component {
	render() {
		return (
			<div>
			<Description />
			<Sky />
			<div id="grass"/>
			<Ground />
			<i className="fa fa-fw fa-arrow-circle-o-left fa-4x hidden-xs hidden-sm"
				id="page1-arrow-left"
				onClick={scroll.scrollLeft}></i>
			<i className="fa fa-fw fa-arrow-circle-o-right fa-4x hidden-xs hidden-sm"
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
			<Ground2 />
			<Sky2 />
			<i className="fa fa-fw fa-arrow-circle-o-left fa-4x hidden-xs hidden-sm"
				id="page2-arrow-left"
				onClick={scroll.scrollLeft}></i>
			<i className="fa fa-fw fa-arrow-circle-o-right fa-4x hidden-xs hidden-sm"
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
			<FAQ faqs={Constants.FAQ} />
			<Sky3 />
			<Ground3 />
			<i className="fa fa-fw fa-arrow-circle-o-left fa-4x hidden-xs hidden-sm"
				id="page3-arrow-left"
        		onClick={scroll.scrollLeft}></i>
			<i className="fa fa-fw fa-arrow-circle-o-right fa-4x hidden-xs hidden-sm"
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
        <i
          className="fa fa-fw fa-arrow-circle-o-left fa-4x hidden-xs hidden-sm"
          id="page4-arrow-left"
          onClick={scroll.scrollLeft}>
        </i>
 		<i className="fa fa-fw fa-arrow-circle-o-right fa-4x hidden-xs hidden-sm"
         	id="page4-arrow-right"
         	onClick={scroll.scrollRight}>
         </i>
       </div>
     );
   }
 }

class Page5 extends React.Component {
   render() {
     return (
       <div>
         <Partners />
         <i
           className="fa fa-fw fa-arrow-circle-o-left fa-4x hidden-xs hidden-sm"
           id="page5-arrow-left"
           onClick={scroll.scrollLeft}>
         </i>
      </div>
    );
  }
}

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Page0 />, document.getElementById('page0'));
ReactDOM.render(<Page1 />, document.getElementById('page1'));
ReactDOM.render(<Page2 />, document.getElementById('page2'));
ReactDOM.render(<Page3 />, document.getElementById('page3'));
ReactDOM.render(<Page4 />, document.getElementById('page4'));
ReactDOM.render(<Page5 />, document.getElementById('page5'));
