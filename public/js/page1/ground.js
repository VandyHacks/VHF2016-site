import React from 'react';
import Tree from './tree.js'
import Image from '../image.js'

export default class Ground extends React.Component {
	render() {
		return(
			<div className="hidden-xs hidden-sm">
			<Image path="img/page1/kirkland.svg" class="kirkland"/>
			<Tree path="img/page1/tree1.svg" class="tree1"/>
			<Tree path="img/page1/tree2.svg" class="tree2"/>
			<Tree path="img/page1/tree3.svg" class="tree3"/>
			<Tree path="img/page1/tree1.svg" class="tree4"/>
			<Tree path="img/page1/tree4.svg" class="tree5"/>
			<Tree path="img/page1/tree4.svg" class="tree6"/>
			<Tree path="img/page1/tree3.svg" class="tree7"/>
			<Tree path="img/page1/tree5.svg" class="tree8"/>
			</div>
		);
	}
}
