import React from 'react';

export default class Partners extends React.Component {
	render() {
		return(
			<div>
			<p className="partners">Partners</p>
			<p className="sponsors">Interested in sponsoring VandyHacks?<br />Reach out to us at<br />
            	<a href="mailto:sponsor@vandyhacks.org">sponsors@vandyhacks.org</a>
          	</p>
			<img src="img/page5/tree1.svg" className="p5tree1 hidden-xs hidden-sm" />
			<img src="img/page5/tree2.svg" className="p5tree2 hidden-xs hidden-sm" />
			<img src="img/page5/tree3.svg" className="p5tree3 hidden-xs hidden-sm" />
			<img src="img/page5/tree4.svg" className="p5tree4 hidden-xs hidden-sm" />
			<img src="img/page5/trees1.svg" className="p5trees1 hidden-xs hidden-sm" />
			</div>
			);
	}
}