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
			<Tree path="img/p2tree1.svg" class="p2tree1"/>
			<Tree path="img/p2tree2.svg" class="p2tree2"/>
			<Tree path="img/p2tree3.svg" class="p2tree3"/>
			</div>
			</div>
		);
	}
}
