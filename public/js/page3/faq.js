import React from 'react';

export default class FAQ extends React.Component {

  render() {

    // for each question in the faqs array (this.props.faqs)
    // construct the FAQ question
    // <div>
    //   <h3> question['question']</h3>
    //   <p> question['answer']</p>
    // </div>
    // Render the questions in the return method
		return(
			<div>
			<p className="faq">FREQUENTLY ASKED QUESTIONS:</p>
			</div>
		);
	}
}

/*
FAQ.propTypes = {
  faqs: React.PropTypes.Array
}
*/
