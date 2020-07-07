import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AccordionView.scss';
// // import bulmaCollapsible from '@creativebulma/bulma-collapsible';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Accordion, Card} from 'react-bootstrap';
// import { Accordion, AccordionItem } from 'react-light-accordion'
import { Accordion, AccordionItem } from 'react-sanfona';


class AccordionView extends Component {

  state = {
    counter: 0,
    user_id: this.props.reduxStore.user.id,
    surveyAnswer: '', // remove
    resource_id: '', // needed? remove?
    survey_q1: '',
    survey_q2: '', 
    survey_q3: '',
    survey_q4: '',
    survey_q5: '',
    survey_q6: '',
    survey_q7: '',
    survey_q8: '',
    survey_q9: '',
    survey_q10: '',
    survey_q11: '',
    survey_q12: '',
    survey_q13: '',
    survey_q14: '',
    survey_q15: '',
    survey_q16: '',
    survey_q17: '',
    survey_q18: '',
    survey_q19: '',
    survey_q20: '',
    survey_q21: '',
    survey_q22: '',
    survey_q23: '',
    survey_q24: '',
    survey_q25: '',
    survey_q26: '',
    survey_q27: '',
    survey_q28: '',
    survey_q29: '',
    survey_q30: '',
    survey_q31: '',
    survey_q32: '',
  }

  componentDidMount = () => {
    this.props.dispatch ({ 
      type: 'FETCH_NEW_SURVEY'
    })
    this.setState({
      user_id: this.props.reduxStore.user.id
    })
  }

  handleChange = (event) => {
    console.log('AccordionView event.target.value', event.target.value);
    this.setState({
      surveyAnswer: event.target.value
    })
  }

  save = () => {
    this.props.dispatch({ 
      type: 'SAVE_ANSWER', 
      payload: this.state
    });
  }

  render() {
    // console.log('asdf this.state', this.state);
    // console.log('this.props.reduxStore:', this.props.reduxStore);
    const question = this.props.reduxStore.loadSurvey
    return (
      <>
      <h1>Outline View</h1>
      <Accordion allowMultiple={true}>
        {question.map(item => {
          return (
            <AccordionItem title={'Question ' + item.question_id + ':   ' + item.question_header } expanded={item === 1} className="closed">
              <div className="open">
                {item.question_text}
                {item.response_type !== 'dropdown' 
              ? 
                <input type={item.response_type} onChange={this.handleChange}></input> 
              :
               <select onChange={this.handleChange}>
                 <option disabled selected value>Choose</option>
                 <option value='test_one'>TEST 1</option>
                 <option value='test_two'>TEST 2</option>
               </select> 
               }
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
      <button className="button">BACK</button>
      <button className="button" onClick={this.save}>SAVE</button>
      </>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(AccordionView);