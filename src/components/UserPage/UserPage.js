import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import NewSurvey from '../LoadSurveys/LoadSurveys';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Change to HomePage.js?
      Welcome, { props.user.username }!
    </h1>
    <p>Thank you for volunteering for the annual HUD Point-In-Time Count! Your support helps tell the story of our local housing crisis. Comprehensive and accurate collection of homeless data ensures the appropriate allocation of funding and informs the creation of programs most suited to the needs of our homeless population.</p>
    <p>Your ID is: {props.user.id}</p>
    <NewSurvey/>
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
