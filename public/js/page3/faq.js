import React from 'react';
import FAQQuestion from './FAQQuestion.js'

export default class FAQ extends React.Component {

  render() {

    const questions = []
    this.props.faqs.forEach((q, idx) => {
      questions.push(
        <div key={`faq-${idx}`} className="col-xs-12 col-sm-6">
          <FAQQuestion
            answer={q.answer}
            index={idx}
            question={q.question}
          />
        </div>
      );
      if (idx % 2 === 1) {
        questions.push(
          <div key={`faq-${idx}-clearfix`} className="clearfix visible-sm-block visible-md-block visible-lg-block" />
        );
      }
    });
		return (
			<div>
        <p className="faq">Frequently Asked Questions:</p>
        <div className="faqQuestions row">
          {questions}
        </div>
			</div>
		);
	}
}

FAQ.propTypes = {
  faqs: React.PropTypes.array.isRequired
}
