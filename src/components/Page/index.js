import React, { PropTypes, Component } from 'react';
import QuestionContainer from '../../containers/QuestionContainer'
import BackButtonContainer from '../../containers/BackButtonContainer'

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id : null
    }
  }
  componentWillMount() {
    let loc = location.hash
    if (!loc) { loc = location.pathname.replace('#', '') }
    else { loc.replace('#', '') }
    const id = loc.split("/page/")
    let newId = id[1];
    this.props.onPageMount(newId);  
  }
  
  render() {
    // const { feedback, question } = this.props
    return(  
      <div className="">
      <BackButtonContainer option="true" />
      <div className="bg-app-brand-accent1 app-h2 w-100 tc">
        <h4 className="mt0 f3 pt2 roboto-italic">2 Quick questions</h4>
      </div>
      {
        <QuestionContainer /> 
      }
      </div>
    )
  }
}

Page.propTypes = {
  // feedback: PropTypes.object.isRequired,
  // question: PropTypes.object,
  // setPage: PropTypes.func.isRequired
};

export default Page;