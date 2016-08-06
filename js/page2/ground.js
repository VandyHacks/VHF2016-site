import React from 'react';
import Treehouse from './treehouse.js';
import Squirrel from './squirrel.js';
import Tree from './tree.js';

export default class Ground2 extends React.Component {
	render() {
		return(
			<div>
			<Treehouse />
			<div className="hidden-xs hidden-sm">
			<Squirrel />
			<Tree path="styles/p2tree1.svg" class="p2tree1"/>
			<Tree path="styles/p2tree2.svg" class="p2tree2"/>
			<Tree path="styles/p2tree3.svg" class="p2tree3"/>
			</div>
			</div>
		);
	}
}