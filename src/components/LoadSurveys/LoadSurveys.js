import React, {Component} from 'react';
import { connect } from 'react-redux';
// import NewSurvey from '../NewSurvey/NewSurvey';
import { withRouter } from "react-router-dom";


class LoadSurveys extends Component {

startNewSurvey = () => {
  this.props.dispatch ({ type: 'FETCH_NEW_SURVEY'});
  this.props.history.push('/NewSurvey')
}

accordionNewSurvey = () => {
  this.props.dispatch ({ type: 'FETCH_NEW_SURVEY'});
  this.props.history.push('/AccordionView')
}

viewCompletedSurveys = () => {
  this.props.dispatch ({ type: 'FETCH_ALL_SURVEYS'});
  this.props.history.push('/info')
}

render () {
  return (
    <div className="center-buttons">
    <button className="button" onClick={ this.startNewSurvey }>Start New Count</button>
    {/* <button className="button" onClick={ this.accordionNewSurvey }>AccordionView New Survey</button> */}
    <button className="button" onClick={ this.viewCompletedSurveys }>View My Counts</button>
    {/* <button className= "button" onClick={ () => this.props.dispatch({ type: 'LOGOUT' })} >Log Out</button> */}
  </div>
  )
}
}

const mapStateToProps = (reduxStore) => ({reduxStore})
export default connect()(withRouter(LoadSurveys));