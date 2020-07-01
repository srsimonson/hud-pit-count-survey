import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewSurvey extends Component {

  componentDidMount = () => {
    console.log('in newSurvey');
  }

  render() {
    return (
        <div>
        <h1>hi</h1>
        </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(NewSurvey);