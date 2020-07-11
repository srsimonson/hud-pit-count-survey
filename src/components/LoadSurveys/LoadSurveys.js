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
}

render () {
  return (
    <div>
    <button className="button" onClick={ this.startNewSurvey }>Start New Count</button>
    {/* <button className="button" onClick={ this.accordionNewSurvey }>AccordionView New Survey</button> */}
    <button className="button" onClick={ this.viewCompletedSurveys }>View My Counts</button>
    {/* <button className= "button" onClick={ () => this.props.dispatch({ type: 'LOGOUT' })} >Log Out</button> */}
  </div>
  )
}
}

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action

const mapStateToProps = (reduxStore) => ({reduxStore})
export default connect()(withRouter(LoadSurveys));