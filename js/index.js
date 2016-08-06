import React from 'react';
import ReactDOM from 'react-dom';
import Description from './description.js';
import Sky from './sky.js';
import Ground from './ground.js';

class Main extends React.Component {
	render() {
		return (
			<div>
			<Description />
			<Sky />
			<Ground />
            </div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('main'));

