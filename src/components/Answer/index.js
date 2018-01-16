import React, { PropTypes } from 'react';
import Rating from '../Rating'
import Radio from '../Radio'
import Checkbox from '../Checkbox'
import Textarea from '../Textarea'

const Answer = ({ question, submitFeedback }) => {
  switch(question.questionType) {
    case 'RADIO': 
      return (<Radio choices={question.choices} id={question.id} submitFeedback={submitFeedback}/>)
    case 'CHECKBOX': 
      return (<Checkbox choices={question.choices}  id={question.id} submitFeedback={submitFeedback}/>)
    default: 
      return (<div></div>)
  }
};

Answer.propTypes = {
  question: PropTypes.object.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default Answer;
