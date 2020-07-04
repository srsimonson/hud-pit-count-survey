import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewSurvey.scss';

let counter = 1;

class NewSurvey extends Component {

  state = {
    counter: 0,
    user_id: this.props.reduxStore.user.id,
    surveyAnswer: '',
  }

  componentDidMount = () => {
    this.props.dispatch ({ 
      type: 'FETCH_NEW_SURVEY'
    })
    this.setState({
      // counter: 0, ??????
      user_id: this.props.reduxStore.user.id
    })
  }

  handleChange = (event) => {
    console.log('hi', event.target.value);
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

  plus = () => {
    this.setState({
      counter: counter++
    })
    console.log('counter:', this.state);
  }

  minus = () => {
    this.setState({
      counter: counter--
    })
    console.log('counter:', this.state);
  }

  render() {
    const question = this.props.reduxStore.loadSurvey
    
    console.log('Q U E S T I O N:',  question[6] && question[6].question_text );

    return (
      <>
        <div>
          <h1>New Survey</h1>
          {/* <li>{(this.props.reduxStore.loadSurvey[2].question_text)}</li> */}
          <p>
            {question[counter] && question[counter].question_text} {question[counter] && question[counter].response_type} 
            <br/>
            <button className="button" onClick={this.minus}>Minus</button>
            <button className="button" onClick={this.plus}>Plus</button >
          </p>
          <ul>
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
          </ul>
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