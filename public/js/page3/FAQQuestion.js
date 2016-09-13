import React from 'react';

export default class FAQQuestion extends React.Component {

  render() {

		return (
      <div>
        <h4 className="faqQuestion">{this.props.question}</h4>
        <div id={`faq-${this.props.index}-answer`}>{this.props.answer}</div>
      </div>
		);
	}
}

FAQQuestion.propTypes = {
  answer: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  question: React.PropTypes.string.isRequired,
}
