import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewSurvey extends Component {

  state = {
    user_id: this.props.reduxStore.user.id,
    surveyAnswer: '',
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
    console.log('hi', event.target.value);
    this.setState({
      surveyAnswer: event.target.value
    })
  }

  save = () => {
    this.props.dispatch({ 
      type: 'SAVE_ANSWER', 
      payload: this.state.surveyAnswer});
  }

  render() {
    console.log('asdf this.state', this.state);

    const question = this.props.reduxStore.loadSurvey
    return (
        <div>
          <h1>New Survey</h1>
          {/* <p>{JSON.stringify(question)}</p> */}
          <ul>
            {question.map(item =>
              <li key={item.id}>
                {item.question_text}
              { item.response_type !== 'dropdown' 
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
          <button>BACK</button>
          <button onClick={this.save}>SAVE</button>
          <p>{this.props.reduxStore.loadSurvey[7] && JSON.stringify(this.props.reduxStore.loadSurvey[7].test)}</p>
        </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(NewSurvey);