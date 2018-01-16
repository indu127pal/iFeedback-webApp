import React, { PropTypes } from 'react';
import RatingContainer from '../../containers/RatingContainer';
import PageContainer from '../../containers/PageContainer';
import ThankYou from '../ThankYou';

const FeedbackPage = props => {
  const { feedback, questions } = props
  // const customer = feedback.feedback.customer;
  const q = questions[0];
  const loci = location.href
  const value = loci.split("/participant/")
  const id = value[1];
  // location.assign('/participant/'+ `${id}`);
  let loc = location.hash
  if (!loc) { loc = location.pathname.replace('#', '') }
  else { loc.replace('#', '') }
  if (loc === `/participant/${id}` || loc === "" || loc === "/" || loc === "#/" || loc === "/build/index.html") {
    return(
      <RatingContainer choices={q.choices} id={q.id} key={q.id} question={q} />
    ) 
  } else if (loc === "/thankyou" || loc === "#/thankyou" || loc === "/build/index.html/thankyou") {
    return (
      <ThankYou />
    )
  } else {
    return (
      <PageContainer />
    )
  }
}

FeedbackPage.propTypes = {
  feedback: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
};

export default FeedbackPage
