import React from 'react';
import { connect } from 'react-redux';
import LoadSurveys from '../LoadSurveys/LoadSurveys';

const WelcomePage = (props) => (
  <div className="container">
    <div className="content">
      <h1 id="welcome">Welcome, { props.user.username }!</h1>
      <p>Thank you for volunteering for the annual HUD Point-In-Time Count!</p>
      <p>Your support helps tell the story of our local housing crisis.</p>
      <p>Comprehensive and accurate collection of homeless data ensures the appropriate allocation of funding and informs the creation of programs most suited to the needs of our homeless population.</p>

      {/* LoadSurveys holds new blank survey, in progress surveys, and completed surveys */}
      <LoadSurveys/>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(WelcomePage);
