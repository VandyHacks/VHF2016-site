import React from 'react';

export default class FAQQuestion extends React.Component {

  render() {

		return (
      <div className="faq">
        <h4 className="faqQuestion">{this.props.question}</h4>
        <div className="faqAnswer">{this.props.answer}</div>
      </div>
		);
	}
}

FAQQuestion.propTypes = {
  answer: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  question: React.PropTypes.string.isRequired,
}
