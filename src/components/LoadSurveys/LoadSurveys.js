import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewSurvey from '../NewSurvey/NewSurvey';
import { withRouter } from "react-router-dom";


class LoadSurveys extends Component {

// LoadSurveys = props => (
//   <div>
//     <button
//       onClick={ ()=> props.dispatch ({ type: 'FETCH_NEW_SURVEY'})
//       }>Start New Survey</button>
//     <button>View Completed Surveys</button>
//     <button onClick={ () => props.history.push('/NewSurvey')}>TEST</button>
//   </div>
// );

startNewSurvey = () => {
  this.props.dispatch ({ type: 'FETCH_NEW_SURVEY'});
  this.props.history.push('/NewSurvey')
}

viewCompletedSurveys = () => {
  console.log('in viewCompletedSurveys');
  
}

render () {
  return (
    <div>
    <button onClick={ this.startNewSurvey }>Start New Survey</button>
    <button onClick={ this.viewCompletedSurveys }>View Completed Surveys</button>
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