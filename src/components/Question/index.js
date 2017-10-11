import React, { PropTypes } from 'react';
import AnswerContainer from '../../containers/AnswerContainer'

const Question = ({ question, answer }) => {
  return(
  <div className="pa3">
    { question.name !== "" && 
      <h3 className="f5 fw4 pv3">{question.name}</h3>
    }
    { question.header !== "" && 
      <h3 className="f5 fw4 pv1 mv2">{question.header}</h3>
    }
    { question.noteText !== "" && 
      <h4 className="f6 fw4 i mv1">{question.noteText}</h4>
    }
    <AnswerContainer question={question} answer={answer}/>  
  </div>
  )
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired
};

export default Question;
