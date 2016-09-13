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
    if (screen.width > 769) { // desktop
		  return (
  			<div>
          <p className="faq">Frequently Asked Questions:</p>
          <div className="faqQuestions row">
            {questions}
          </div>
  			</div>
  		);
    } else { // mobile
      return(
        <div>
          <p className="faq">Frequently Asked Questions:</p>
          <p className="faq-question">How does registration work?</p>
          <p className="faq-answer">Registration will open soon on VandyHacks.org. Admission is determined by a variety of different factors, but ultimately comes down to a few lotteries (grouped by geographic region.) If you're curious, email us for more info!</p>
          <p className="faq-question">What should I bring?</p>
          <p className="faq-answer">Be sure to bring: your photo ID, laptop (and any other devices you want to use,) phone, chargers, a change of clothes, toiletries, and your best thinking cap! A government-issued ID is required to rent any hardware.</p>
          <p className="faq-question">How do I get there?</p>
          <p className="faq-answer">Buses or flights, depending on location! We'll be sending buses to schools with a large enough number of applicants. Travel reimbursement outside of the bus routes will depend on our budget, TBD.</p>
          <p className="faq-question">Where will I sleep?</p>
          <p className="faq-answer">We will have a couple of designated quiet rooms, so bring a blanket and pillow!</p>
          <p className="faq-question">What will I eat?</p>
          <p className="faq-answer">We will provide all meals and snacks from Friday's dinner until Sunday's lunch.  We'll be providing vegetarian and gluten-free options, as well! Be sure to designate any allergies or dietary restrictions on your application!</p>
          <p className="faq-question">How are teams formed?</p>
          <p className="faq-answer">Teams are limited to 4 people in size. If you're applying with a team, we will review all of your team members' applications to determine admission.</p>
          <p className="faq-question">What if I've never been to a hackathon?</p>
          <p className="faq-answer">Even more of a reason for you to come! In fact, we'll have beginners' workshops for you to get started, and our mentors can always help you out along the way.</p>
          <p className="faq-question">My question wasn't addressed here. What should I do?</p>
          <p className="faq-answer">Shoot us an email at info@vandyhacks.org!</p>
        </div>
        );
      }
	 }
}

FAQ.propTypes = {
  faqs: React.PropTypes.array.isRequired
}
