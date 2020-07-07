import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './AccordionView.scss';
// // import bulmaCollapsible from '@creativebulma/bulma-collapsible';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Accordion, Card} from 'react-bootstrap';
// import { Accordion, AccordionItem } from 'react-light-accordion'
// import { Accordion, AccordionItem } from 'react-sanfona';


class ResourcePage extends Component {

  state = {
    user_id: this.props.reduxStore.user.id,
    surveyAnswer: '', // remove
    resource_id: '', // needed? remove?
  }

  componentDidMount = () => {
    this.props.dispatch ({ 
      type: 'FETCH_RESOURCES'
    })
    this.setState({
      user_id: this.props.reduxStore.user.id
    })
    console.log('hi', this.props.reduxStore.user.id);
    
  }

  // handleChange = (event) => {
  //   console.log('AccordionView event.target.value', event.target.value);
  //   this.setState({
  //     surveyAnswer: event.target.value
  //   })
  // }

  // save = () => {
  //   this.props.dispatch({ 
  //     type: 'SAVE_ANSWER', 
  //     payload: this.state
  //   });
  // }

  render() {
    // console.log('asdf this.state', this.state);
    // console.log('this.props.reduxStore:', this.props.reduxStore);
    return (
      <div>
        <h1>Resources</h1>
        <button className="button">UPDATE</button>
        <button className="button">SAVE</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(ResourcePage);