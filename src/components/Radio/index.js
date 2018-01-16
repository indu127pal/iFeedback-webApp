import React, { PropTypes, Component } from 'react';
import { Link, Route } from 'react-router-dom'; 
import history from '../History';
import { transition } from '../../utils/feedback';
import { submitFeedback, set } from '../../actions'

class Radio extends Component {
  constructor(props) {
    super(props);

    this.updateAnswer = this.updateAnswer.bind(this);
  }
  updateAnswer(c) {
    var localStorage = require('localStorage')
    if (localStorage.length > 0) {
      let curAnswers = JSON.parse(localStorage.getItem('answers'));
      var arr = [];
      for(var x in curAnswers){
        arr.push(curAnswers[x]);
      }
      const data = 
      {
        "questionCode" : this.props.id,
        "choiceCode" : c.id
      } 
      if (arr.findIndex(i => i.questionCode === data.questionCode && i.choiceCode === data.choiceCode) === -1) {
        arr.push(data);
        console.log(arr);
      }
      localStorage.setItem('answers', JSON.stringify(arr));
      // let ans = localStorage.getItem('answers');
      // console.log(localStorage)
    } 
    this.props.submitFeedback();
    // setTransition(c);
  }
  render() {
    const { choices, id, onClick } = this.props
    return(
      <div className="ph3">
        { choices.map( c => (
         <a href={process.env.PUBLIC_URL + `/page/${c.gotoQuestionId}`} className="link" key={c.id} onClick={() => 
           this.updateAnswer(c)}>
              <p className="ba bw1 pv2 app-b-grey ph2 w70" key={c.id} >
                <h5 className="f5 ml4 black mt0 mb0 roboto-regular">{c.name}</h5>
              </p>
         </a>
        ))}
        <div className="w-100 absolute bottom-2">
          <h4 className="tc black roboto-lightItalic">one more question and done... </h4>
        </div>
      </div>
      )
  }
}

Radio.propTypes = {
  choices: PropTypes.array.isRequired, 
  id: PropTypes.number.isRequired,
  // onClick: PropTypes.func.isRequired
};

export default Radio;
