import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewSurvey.scss';


class NewSurvey extends Component {
  state = {
    counter: 0, // informs dom of question to display on next/back
    user_id: this.props.reduxStore.user.id
  }

  componentDidMount = () => {
    console.log('this.props.reduxStore', this.props.reduxStore);
    this.props.dispatch ({ 
      type: 'FETCH_NEW_SURVEY'
    }) 
    this.setState ({
      counter: 0,
      user_id: this.props.reduxStore.user.id
    })
  }
  accordionNewSurvey = () => {
    this.props.dispatch ({ type: 'FETCH_NEW_SURVEY'});
    this.props.history.push('/AccordionView')
  }

  handleChange = (event, type) => {
    this.setState({
      ...this.state,
      [type]: event.target.value,
    })
  }

  save = () => {
    this.props.dispatch({ 
      type: 'SUBMIT_SURVEY', 
      payload: this.state
    });
    console.log('this.state:', this.state);    
  }

  next = () => {
    this.props.dispatch({ 
      type: 'SET_ANSWER', // was save answer 
      payload: this.state
    });
    this.setState({ counter: this.state.counter +1 })
    this.refs.clear.value = ''
    if ( this.props.reduxStore.loadSurvey[this.state.counter].question_id === 32) {
      console.log('Trigger end screen');
    
    } 
  }

  back = () => {
    this.setState({
      counter: this.state.counter -1
    })
  }

  render() {
   const question = this.props.reduxStore.loadSurvey[this.state.counter]
    return (
        <div className="container">
          <div className="content">
          <h1>HUD Point-In-Time Count</h1>
          <p> {/* Question */}
            {question && question.question_text}
            {question && question.response_type !== 'dropdown' // Unless dropdown, response type is as specified from question table in db.
              ? 
                <input ref="clear" type={question && question.response_type} onChange={(event) => this.handleChange(event, `survey_q${this.state.counter+1}`)}></input> 
              :
              <select ref="clear" onChange={(event) => this.handleChange(event, `survey_q${this.state.counter+1}`)}>
                <option value="" disabled selected value>Choose</option>
                {/* If dropdown, options dynamically populate from response table in db */}
                  {question && question.dropdown_option.map(item => (
                    <option value={item}>{item}</option>
                  ))}
              </select>
            }
            <br/>
            <div className="center-buttons">
              <button className="button" onClick={this.back}>Back</button>
              <button className="button" onClick={ this.accordionNewSurvey }>Outline</button>
              <button className="button" onClick={this.next}>Next</button >
              {/* <button className="button" onClick={this.save}>SAVE</button> */}
            </div>

          </p>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(NewSurvey);