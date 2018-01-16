import React, { PropTypes, Component } from 'react';
import Done from '../Done'
import { select } from 'redux-saga/effects';
import { submitFeedback } from '../../actions';

var localStorage = require('localStorage')
class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select : false,
      selectedArray : new Array(),
      selectedId: new Array(),
      commentText: "",
    }
    this.onSelected = this.onSelected.bind(this);
    this.autoHeight =this.autoHeight.bind(this);
  }

  autoHeight(e) {
    this.setState({ commentText: e })
    var textarea = document.querySelector('textarea');
    textarea.addEventListener('keydown', autosize);
    function autosize(){
      var el = this;
      setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        el.style.border = 'border:2px solid #b3b3b3;';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    }
  }
  onSelected(val, id) {
    var ele = document.getElementsByName(id)[0];
    let selectedArray = this.state.selectedArray;
    let index = selectedArray.indexOf(val)
    if (index < 0){
      selectedArray.push(val);
      ele.checked = true
    } else {
      ele.checked = false
      selectedArray.splice(index,1);
    }
    const selectedId = this.state.selectedId;
     selectedId.push(id);
    this.setState({ 
      select: true,
      selectedArray: selectedArray,
      selectedId: selectedId
     })
     
     if (localStorage.length > 0) {
      let curAnswers = JSON.parse(localStorage.getItem('answers'));
      var arr = [];
      for(var x in curAnswers){
        arr.push(curAnswers[x]);
      }
      const data = 
      {
        "questionCode" : this.props.id,
        "choiceCode" : id
      }
      if (arr.findIndex(i => i.questionCode === data.questionCode && i.choiceCode === data.choiceCode) === -1) {
        arr.push(data);
        console.log(arr);
      }
      localStorage.setItem('answers', JSON.stringify(arr));
      // let ans = localStorage.getItem('answers');
      // console.log(ans)
     } 
     if (this.state.commentText !== "") {
      if (localStorage.length > 0) {
        let curAnswers = JSON.parse(localStorage.getItem('answers'));
        var arr = [];
        for(var x in curAnswers){
          arr.push(curAnswers[x]);
        }
        const data =
        {
          "questionCode" : this.props.id,
          "answer" : this.state.commentText,
          "answerType": "Integer", 
        }
        arr.push(data);
        console.log(arr);
        localStorage.setItem('answers', JSON.stringify(arr));
        let ans = localStorage.getItem('answers');
      }
    }
  }

  render() {
    const { choices, id, onChange } = this.props
    let array = this.state.selectedArray
    return (
      <div className="ph3">
      { choices.map( c => (
        <p className={array.find((x) => x == c.value) ? "ba bw1 pv2 app-b-grey bg-app-faint-green ph2 w70" : "ba bw1 pv2 app-b-grey ph2 w70"}  key={c.id} 
        onClick={() => {
          this.onSelected(c.value, c.id)
        }} >
        <input className="ml2 h1 w1 mr2" type='checkbox' value={c.value} name={c.id} />
          <label className="f5 fw6 ml1 black roboto-regular">{c.name}</label>
        </p>
      )) 
      }
      {
        <textarea className="gray textarea roboto-lightItalic" placeholder="Leave a comment(optional)" 
          onChange={ (e) => { 
              this.autoHeight(e.target.value)
            }}>
        </textarea>
      }
      {
        <div className="bottom-2">
          <h4 className="tc black roboto-lightItalic">choose all those that apply</h4>
        </div>
      }
      {
        this.state.select && <div className="tc mt4">
          <Done submitFeedback={this.props.submitFeedback}/>
        </div>
      }
    </div>
    )
  }
}
// const mapDispatchToProps = dispatch => ({
//   submitFeedback: () => {
//     dispatch(submitFeedback());
//   },
// });

Checkbox.propTypes = {
  choices: PropTypes.array.isRequired, 
  id: PropTypes.number.isRequired
};

export default Checkbox;