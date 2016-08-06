import React from 'react';
import Tree from './tree.js'

export default class Ground extends React.Component {
	render() {
		return(
			<div className="hidden-xs hidden-sm">
			<img src="styles/kirkland.svg" className="kirkland"/>
			<div id="wrapper"/>
			<Tree path="styles/tree1.svg" class="tree1"/>
			<Tree path="styles/tree2.svg" class="tree2"/>
			<Tree path="styles/tree3.svg" class="tree3"/>
			<Tree path="styles/tree1.svg" class="tree4"/>
			<Tree path="styles/tree4.svg" class="tree5"/>
			<Tree path="styles/tree4.svg" class="tree6"/>
			<Tree path="styles/tree3.svg" class="tree7"/>
			<Tree path="styles/tree5.svg" class="tree8"/>
			</div>
		);
	}
}