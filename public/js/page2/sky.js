import React from 'react';
import Image from '../image.js';

export default class Sky2 extends React.Component {
	render() {
		return(
			<div>
      <div className="speakers">Speakers</div>
			<div className="jeff-description">
        <h5 className='speaker-header'>Jeff Rothschild</h5>
        <p className="speaker-description">
        Jeff Rothschild joined Facebook in 2005 as one of the earliest and most experienced
        executives. He helped the social networking site scale as its vice president of
        infrastructure engineering for five years, before stepping back into an advisory role in
        2010. He left Facebook in June 2015. Before Facebook, Rothschild, a Vanderbilt University
        School of Engineering alumnus, started out developing network storage technologies at
        Honeywell and Intel. He also cofounded several of his own Silicon Valley firms, the largest
        of which, Veritas Software, was sold to Symantec for $13.5 billion in stock in 2004.
        Rothschild is now focused on technology investing and serves on the boards of startups
        Primary Data, Interana and Lytmus. A trustee of Vanderbilt University, he became vice
        chairman elect of the board in 2016.
        </p>
			</div>
			<div className="microstrat-description">
        <h5 className='speaker-header'>Timothy Lang</h5>
        <p className="speaker-description">
        Timothy E. Lang is the Senior Executive Vice President & Chief Technology Officer at
        Microstrategy. He previously served as Senior Vice President of Analytics. Mr. Lang, after
        earning his Bachelor’s in Information Management at the University of Melbourne, gained work
        experience at SAP BusinessObjects and Crystal Decisions. He served as Vice President of
        Production for SAP SE from 2008 to 2010. He then moved on to Talemetry Inc., a leading
        provider of talent generation Saas solutions. In 2014, Mr. Lang joined Microstrategy as the
        Chief Technology Officer responsible for the Technology Organization at Microstrategy. He
        works today building world class Analytics (Business Intelligence) and Identity Platforms.
        </p>
			</div>
			</div>
		);
	}
}
