import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.scss';

const Nav = (props) => (
  <div className="nav">
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          {/* <Link className="nav-link" to="/NewSurvey">NewSurvey</Link>
          <Link className="nav-link" to="/AccordionView">AccordionView</Link> */}
          <Link className="nav-link" to="/info">Data</Link>
          <Link className="nav-link" to="/resource">Resources</Link>
        </>
      )}
      {props.user.id && ( 
      <LogOutButton className="nav-link"/> )} </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
