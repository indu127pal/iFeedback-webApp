import { connect } from 'react-redux';
import Page from '../../components/Page';
import { setPage } from '../../actions';
import React, { Component } from 'react';


class PageContainer extends Component{
  constructor(props){
    super(props);
  }

  onPageMount = (pageId) => {
    // Set your state variable and dispatch an action.
    // console.log("Getting the new pageId",pageId);
    this.props.setPage(pageId);
    // (this.props.setPage(pageId));
  }
  render(){
    return(
      <Page onPageMount={this.onPageMount}/>
    )
  }
}

const mapStateToProps = (state) => ({
  feedback: state.feedback,
  question: state.feedback.currentQuest,
});

const mapDispatchToProps = dispatch => ({
  setPage: (newId) => {
    dispatch(setPage(newId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
