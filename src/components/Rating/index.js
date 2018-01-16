import React, { PropTypes, Component } from 'react';
import Header from '../Header';
import BackButton from '../BackButton';
import { submitFeedback, setTransition } from '../../actions'

class Rating extends Component {
  constructor(props) {
    super(props);
    
    this.updateAnswer = this.updateAnswer.bind(this);
  }
  
  updateAnswer(c) {
    var localStorage = require('localStorage')
    if (localStorage.length > 0 ) {
      let curAnswers = JSON.parse(localStorage.getItem('answers'));
      var arr = [];
      for(var x in curAnswers){
        arr.push(curAnswers[x]);
      }
      const data = 
      {
        "questionCode" : this.props.question.id,
        "choiceCode" : c.id
      } 
      if (arr.findIndex(i => i.questionCode === data.questionCode && i.choiceCode === data.choiceCode) === -1) {
        arr.push(data);
        console.log(arr);
      }
      localStorage.setItem('answers', JSON.stringify(arr));
      // let ans = localStorage.getItem('answers');
      // console.log(ans)
    } 
    this.props.submitFeedback();
    // setTransition(c);
  }
  render() {
    const { question, setPage, id } = this.props
    let selected = 'tc mt0 fw3 bold'
    const choices = question.choices;
    
    return(
      <div className="">
        <BackButton option="" />
        <Header title="How was your experience?" />
        {
          <div className="flex justify-center mt5 ph1">
              { choices.map( c => (
                <a href={process.env.PUBLIC_URL + `/page/${c.gotoQuestionId}`} key={c.id} className="link" onClick={() => 
                 this.updateAnswer(c)}>
                  <div className="ph2">
                    { c.image != null ?
                      <img className="" src={c.image} alt="rate here"/> : ''
                    }
                    {
                      <h5 className="f5 black roboto-regular tc mt0">{c.name}</h5>
                    }
                  </div>
                </a>
              ))}
          </div>
        }
        {
          <div className="w-100 absolute bottom-2">
              <h4 className="tc black roboto-lightItalic">Tap a Smiley!</h4>
          </div> 
        }
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   submitFeedback: () => {
//     dispatch(submitFeedback());
//   }
// });
Rating.propTypes = {
  // choices: PropTypes.array.isRequired,
  // id: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Rating;
