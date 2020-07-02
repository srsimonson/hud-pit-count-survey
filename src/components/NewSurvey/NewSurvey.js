import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewSurvey extends Component {

  componentDidMount = () => {
    console.log('in newSurvey');
    this.props.dispatch ({ type: 'FETCH_NEW_SURVEY'})    
  }

  render() {
    console.log('this.props.reduxStore.loadSurvey:', this.props.reduxStore.loadSurvey);
    
    const question = this.props.reduxStore.loadSurvey
    console.log('question', question);
    
    return (
        <div>
          <h1>New Survey</h1>
          <p>{JSON.stringify(question)}</p>
          <ul>
            {question.map(item =>
              <li key={item.id}>
                {item.question_text}
              { item.response_type !== 'dropdown' 
              ? 
              <input type={item.response_type}></input> 
              :
               <select>
                 <option value='test1'>TEST 1</option>
                 <option value='test2'>TEST 2</option>
               </select> 
               }
              </li>)}
          </ul>
          <button>BACK</button>
          <button>SAVE</button>
          <p>{this.props.reduxStore.loadSurvey[7] && JSON.stringify(this.props.reduxStore.loadSurvey[7].test)}</p>
        </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(NewSurvey);