import React, { PropTypes, Component } from 'react';
import AnswerContainer from '../../containers/AnswerContainer'
import BackButton from '../BackButton';
import history from '../History';

class Question extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { question, feedback } = this.props
    let id = question.id;
    let count;
    if (id === 9102 || id === 9110) {
      count = 1
    } else {
      count = 2
    }
    return(
      <div className="">
        <div className="flex mt2 ph2">
          {
              <h2 className="f-4 mt0 mb0 moon-gray ml2 mr2">{`${count}`}</h2>
          }
          { question.text !== "" && 
            <h5 className="f5 black mt3 roboto-regular">{question.text}</h5>
          }
        </div>
      <AnswerContainer question={question} />  
    </div>
    )
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired
};

export default Question;