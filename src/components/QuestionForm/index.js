import React, { PropTypes } from 'react';
import AnswerFormContainer from '../../containers/AnswerFormContainer'

const QuestionForm = ({ question, answer }) => {
  return(
  <div className="pa3 mt1">
    { question.name !== "" && 
      <h3 className="f5 fw4 pb3 mt1 pt1">{question.name}</h3>
    }
    { question.header !== "" && 
      <h3 className="f5 fw4 pv1 mv2">{question.header}</h3>
    }
    { question.noteText !== "" && 
      <h4 className="f6 fw4 i mv1">{question.noteText}</h4>
    }
    <AnswerFormContainer question={question}/>  
  </div>
  )
};

QuestionForm.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired
};

export default QuestionForm;
