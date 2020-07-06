import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewSurvey.scss';

let counter = 0;

class NewSurvey extends Component {

  state = {
    counter: 0,
    user_id: this.props.reduxStore.user.id,
    surveyAnswer: '', // remove?
    resource_id: '', // needed? remove?
    // survey_q1: '', survey_q2: '', survey_q3: '', survey_q4: '', survey_q5: '', survey_q6: '', survey_q7: '', survey_q8: '', survey_q9: '', survey_q10: '', survey_q11: '', survey_q12: '', survey_q13: '', survey_q14: '', survey_q15: '', survey_q16: '', survey_q17: '', survey_q18: '', survey_q19: '', survey_q20: '', survey_q21: '', survey_q22: '', survey_q23: '', survey_q24: '', survey_q25: '', survey_q26: '', survey_q27: '', survey_q28: '', survey_q29: '', survey_q30: '', survey_q31: '', survey_q32: '',
  }

  componentDidMount = () => {
    this.props.dispatch ({ 
      type: 'FETCH_NEW_SURVEY'
    }) 
    this.setState ({
      counter: 0,
      user_id: this.props.reduxStore.user.id
    })
  }

  handleChange = (event, type) => {
    console.log('NEW SURVEY, event.target.value:', event.target.value);
    console.log('this.props.reduxStore', this.props.reduxStore);
    
    this.setState({
      ...this.state,
      [type]: event.target.value
    })
  }

  save = () => {
    this.props.dispatch({ 
      type: 'SAVE_ANSWER', 
      payload: this.state
    });
    console.log('this.state:', this.state);    
  }

  plus = () => {
    this.setState({
      counter: counter++
    })
    console.log('P L U S this.state:', this.state);
    console.log('this.props.reduxStore.loadSurvey[counter].question_id', this.props.reduxStore.loadSurvey[counter].question_id);
  }

  minus = () => {
    this.setState({
      counter: counter--
    })
    console.log('M I N U S this.state:', this.state);
    console.log('this.props.reduxStore.loadSurvey[counter].question_id', this.props.reduxStore.loadSurvey[counter].question_id);
  }

  render() {
    // console.log('asdf this.state', this.state);
    // console.log('this.props.reduxStore:', this.props.reduxStore);
    const question = this.props.reduxStore.loadSurvey
    
    // console.log('Q U E S T I O N:',  question[6] && question[6].question_text );

    return (
      <>
        <div>
          <h1>New Survey</h1>
          {/* <div class="progress" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
            <div class="progress-meter" style="width: 50%"></div>
          </div> */}

          {/* <li>{(this.props.reduxStore.loadSurvey[2].question_text)}</li> */}
          <p>
            {question[counter] && question[counter].question_text} 
            {/* {question[counter] && question[counter].response_type}  */}
            {question[counter] && question[counter].response_type !== 'dropdown' 
              ? 
                <input type={question[counter] && question[counter].response_type} onChange={(event) => this.handleChange(event, `survey_q${counter+1}`)}></input> 
              :
               <select onChange={(event) => this.handleChange(event, `survey_q${counter}`)}>
                 <option disabled selected value>Choose</option>
                 <option value='yes'>YES</option>
                 <option value='no'>NO</option>
                 <option value='dk/ref'>DON'T KNOW / REFUSED</option>
               </select> 
               }


            <br/>
            <button className="button" onClick={this.minus}>Minus</button>
            <button className="button" onClick={this.plus}>Plus</button >
          </p>
          {/* <ul>
            {question.map(item =>
              <li key={item.id}>
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
              </li>)}
          </ul> */}

          <button className="button" >BACK</button>
          <button className="button" onClick={this.save}>SAVE</button>
          {/* <p>{this.props.reduxStore.loadSurvey[7] && JSON.stringify(this.props.reduxStore.loadSurvey[7].test)}</p> */}
        </div>
</>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(NewSurvey);