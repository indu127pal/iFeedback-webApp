import React, { PropTypes } from 'react';
import Rating from '../Rating'
import Radio from '../Radio'
import Checkbox from '../Checkbox'
import Textarea from '../Textarea'

const Answer = ({ question, answer, onClick }) => {
  switch(question.questionType) {
    case 'RATING': 
      return (<Rating choices={question.choices} answer={answer} id={question.id} onClick={onClick}/>)
    case 'RADIO': 
      return (<Radio choices={question.choices} answer={answer} id={question.id} onClick={onClick}/>)
    case 'CHECKBOX': 
      return (<Checkbox choices={question.choices} answer={answer} id={question.id} onClick={onClick}/>)
    case 'TEXTAREA': 
      return (<Textarea answer={answer} id={question.id} onChange={onClick}/>)
    default: 
      return (<div></div>)
  }
};

Answer.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Answer;
