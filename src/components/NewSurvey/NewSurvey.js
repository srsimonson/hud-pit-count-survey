import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewSurvey.scss';


class NewSurvey extends Component {
  state = {
    counter: 0, // informs DOM of question to display on next/back
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
    this.props.dispatch ({ type: 'FETCH_NEW_SURVEY' });
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
    this.props.history.push('/resource')
  }

  next = () => {
    this.props.dispatch({ 
      type: 'SET_ANSWER', // was save answer 
      payload: this.state
    });
    this.setState({ 
      counter: this.state.counter +1 
    })
    this.refs.clear.value = ''
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
          <br/>
          <form> {/* Question */}
            {question && question.question_text}
            <br/>
            <br/>
            {question && question.response_type !== 'dropdown' ? // Unless dropdown, response type is as specified from question table in db.
              <input ref="clear" type={question && question.response_type} onChange={(event) => this.handleChange(event, `survey_q${this.state.counter+1}`)}></input> :
              <select ref="clear" onChange={(event) => this.handleChange(event, `survey_q${this.state.counter+1}`)}>
                <option value="" disabled selected value>Choose</option>
                {/* If dropdown, options populate from response table in db. */}
                  {question && question.dropdown_option.map(item => (
                    <option value={item}>{item}</option>
                  ))}
              </select>
            }
            <br/>
            
            <div className="center-buttons">
              {question && question.question_id === 1 ? 
                <button className="button large" disabled>Back</button> :
                <button className="button large" onClick={this.back}>Back</button >
              }
                <button className="hollow button large" onClick={ this.accordionNewSurvey }>Outline</button>
            {/* "Next" toggles to "Save" at final question. Add thank you screen for version 2. */}
              {question && question.question_id === 32 ? 
                <button className="button success large" onClick={this.save}>SAVE</button> :
                <button className="button large" onClick={this.next}>Next</button >
              }
            </div>
          </form>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(NewSurvey);