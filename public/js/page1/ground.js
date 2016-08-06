import React from 'react';
import Tree from './tree.js'

export default class Ground extends React.Component {
	render() {
		return(
			<div className="hidden-xs hidden-sm">
			<img src="public/img/kirkland.svg" className="kirkland"/>
			<Tree path="public/img/tree1.svg" class="tree1"/>
			<Tree path="public/img/tree2.svg" class="tree2"/>
			<Tree path="public/img/tree3.svg" class="tree3"/>
			<Tree path="public/img/tree1.svg" class="tree4"/>
			<Tree path="public/img/tree4.svg" class="tree5"/>
			<Tree path="public/img/tree4.svg" class="tree6"/>
			<Tree path="public/img/tree3.svg" class="tree7"/>
			<Tree path="public/img/tree5.svg" class="tree8"/>
			</div>
		);
	}
}
