import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import ResourcePage from '../ResourcePage/ResourcePage';
import WelcomePage from '../WelcomePage/WelcomePage';
import InfoPage from '../InfoPage/InfoPage';
import NewSurvey from '../NewSurvey/NewSurvey';
import AccordionView from '../AccordionView/AccordionView';

import './App.scss';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div className="x">
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />

            <Route exact path="/resource" component={ResourcePage} />
            <ProtectedRoute exact path="/home" component={WelcomePage} />
            <ProtectedRoute exact path="/info" component={InfoPage} />

        {/* If none of the other routes matched, we will show a 404. */}
            <ProtectedRoute exact path='/NewSurvey' component={NewSurvey}/>
            <ProtectedRoute exact path='/AccordionView' component={AccordionView}/>
            <Route render={() => <h1>404</h1>} />
          </Switch>

          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
