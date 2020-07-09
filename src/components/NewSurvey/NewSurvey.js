import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewSurvey.scss';


class NewSurvey extends Component {

  // const question = this.props.reduxStore.loadSurvey[this.state.counter]

  state = {
    counter: 0,
    user_id: this.props.reduxStore.user.id,
    surveyAnswer: '', // remove?
    resource_id: '', // needed? remove?
    // question: this.props.reduxStore.loadSurvey[this.state.counter],
    // survey_q1: '', survey_q2: '', survey_q3: '', survey_q4: '', survey_q5: '', survey_q6: '', survey_q7: '', survey_q8: '', survey_q9: '', survey_q10: '', survey_q11: '', survey_q12: '', survey_q13: '', survey_q14: '', survey_q15: '', survey_q16: '', survey_q17: '', survey_q18: '', survey_q19: '', survey_q20: '', survey_q21: '', survey_q22: '', survey_q23: '', survey_q24: '', survey_q25: '', survey_q26: '', survey_q27: '', survey_q28: '', survey_q29: '', survey_q30: '', survey_q31: '', survey_q32: '',
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

  handleChange = (event, type) => {
    // console.log('NEW SURVEY, event.target.value: XXXXXXX', event.target.value, type);
    // console.log('this.props.reduxStore', this.props.reduxStore);
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
    // this.setState({
    //   [this.state.question_number]: ''
    // })
    this.setState({
      counter: this.state.counter +1
    })
    this.refs.clear.value = ''
    // console.log('P L U S this.state:', this.state);
    console.log('this.props.reduxStore.loadSurvey[counter].question_id', this.props.reduxStore.loadSurvey[this.state.counter].question_id);
    if ( this.props.reduxStore.loadSurvey[this.state.counter].question_id === 24) {
      console.log('123456');
      
    } 
  }

  back = () => {
    this.setState({
      counter: this.state.counter -1
    })
    console.log('BACK this.state:', this.state);
    console.log('this.props.reduxStore.loadSurvey[counter].question_id', this.props.reduxStore.loadSurvey[this.state.counter].question_id);
  }

  render() {
   const question = this.props.reduxStore.loadSurvey[this.state.counter]
    // console.log('redux state:', this.props.reduxStore);
    console.log('QUESTION', question);
    
    // console.log('this.stateXXXXX:', this.state);
    // let progress = this.props.reduxStore.loadSurvey[this.state.counter].question_id
    return (
      <>
        <div className="container">
          <div className="content">
          <h1>HUD Point-In-Time Count</h1>
          <p>
            {question && question.question_text} 
            {question && question.response_type !== 'dropdown' 
              ? 
                <input ref="clear" type={question && question.response_type} onChange={(event) => this.handleChange(event, `survey_q${this.state.counter+1}`)}></input> 
              :
              // THIS CODE WORKS. IF NEEDED FOR PRESENTATION
               <select ref="clear" onChange={(event) => this.handleChange(event, `survey_q${this.state.counter+1}`)}>
                 <option value="" disabled selected value>Choose</option>
                 <option value='yes'>YES</option>
                 <option value='no'>NO</option>
                 <option value='dk/ref'>DON'T KNOW / REFUSED</option>
               </select>

              
              // <select ref="clear" onChange={(event) => this.handleChange(event, `survey_q${this.state.counter+1}`)}>
              //     <option value="" disabled selected value>Choose</option>
              //     <option value={question && question.dropdown_option[0]}>{question && question.dropdown_option[0]}</option>
              //     {question map here}

              //      <option value={question && question.dropdown_option[1]}>{question && question.dropdown_option[1]}</option>
              //     <option value={question && question.dropdown_option[2]}>{question && question.dropdown_option[2]}</option>
              //     <option value={question && question.dropdown_option[3]}>{question && question.dropdown_option[3]}</option>
              //     <option value={question && question.dropdown_option[4]}>{question && question.dropdown_option[4]}</option>
              //     <option value={question && question.dropdown_option[5]}>{question && question.dropdown_option[5]}</option>
              //     <option value={question && question.dropdown_option[6]}>{question && question.dropdown_option[6]}</option>
              //     <option value={question && question.dropdown_option[7]}>{question && question.dropdown_option[7]}</option>
              //     <option value={question && question.dropdown_option[8]}>{question && question.dropdown_option[8]}</option>
              //     <option value={question && question.dropdown_option[9]}>{question && question.dropdown_option[9]}</option> */}
               
              //  </select>


               }
            <br/>
            <button className="button" onClick={this.back}>Back</button>
            <button className="button" onClick={this.next}>Next</button >
            <button className="button" onClick={this.save}>SAVE</button>
          </p>
          <p>{question && JSON.stringify(question.dropdown_option)}</p>

          <p>{this.props.reduxStore.loadSurvey[7] && JSON.stringify(this.props.reduxStore.loadSurvey[7].test)}</p>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(NewSurvey);