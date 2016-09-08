import React from 'react';

export default class Description extends React.Component {
  render () {
    return (
      <div id="row">
      <div id="vh-description" className="col-md-5 col-md-offset-6 text-center">
	    <h1>What is VandyHacks?</h1>
	      <p>
          Founded in the spring of 2015, VandyHacks was the first collegiate
          hackathon to call the rockin' city of Nashville, Tennessee home.  Now, we're
          proud to bring you VandyHacks III- and it's gonna be even bigger and better. From
          November 11-13, 350+ students from universities all over the nation will meet at
          Vanderbilt University for a weekend of collaboration, innovation, and great food
          (<span id="description-hashtag">#southernhospitality</span>).<br />
          We hope to see y'all there!
        </p>
      </div>
      </div>
    );
  }
}
