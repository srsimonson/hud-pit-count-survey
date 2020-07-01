import React from 'react';
import { connect } from 'react-redux';
import NewSurvey from '../NewSurvey/NewSurvey'

const LoadSurveys = props => (
  <div>
    <button
      onClick={ ()=> props.dispatch ({ type: 'FETCH_NEW_SURVEY'})
      }>Start New Survey</button>
    <button>View Completed Surveys</button>
    <button onClick={ () => props.history.push('/NewSurvey')}>TEST</button>
  </div>
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LoadSurveys);