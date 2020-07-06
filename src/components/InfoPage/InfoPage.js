import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_ALL_SURVEYS'});
    console.log('this.props.reduxStore.loadSurvey', this.props.reduxStore.loadSurvey);
  }

  update = () => {
    console.log('update clicked');
    
  }

  delete = () => {
    // console.log('in delete', item.id);
    // this.props.dispatch({
    //   type: 'DELETE_ANSWER',
    //   payload: item.id
    // })
  }

  render() {
    const surveyResponse = this.props.reduxStore.loadSurvey
  
    return (
      <div>
        <h1> SURVEY DATA</h1>
        {/* <p>Currently logged in as <b>{this.props.user.username}</b></p>
        <p>Clearance level: <b>{this.props.user.clearance_level}</b></p>
        <ul>
          {this.props.secrets.map(secret => (
            <li>
              Clearance: {secret.secrecy_level} | Content: {secret.content}
            </li>
          ))}
        </ul> */}
        <table>
        <thead>
          <tr>
              <th>Survey ID</th>
              <th>User ID</th>
              <th>TEST DATA 1</th>
              <th>TEST DATA 2</th>
              <th>TEST DATA 3</th>
              <th>TEST DATA 4</th>
              <th>TEST DATA 5</th>
              <th>TEST DATA 6</th>
              <th>TEST DATA 7</th>
              <th>TEST DATA 8</th>
              <th colspan="2">Manage Data</th>
          </tr>
        </thead>
          {surveyResponse.map(item =>
            <tr key={item.id}>
              <td>{item.survey_id}</td>
              <td>{item.user_id}</td>
              <td>
                {/* <input placeholder = {item.survey_location}></input> */}
                {item.survey_q1}
              </td>
              <td>{item.survey_q2}</td>
              <td>{item.survey_q3}</td>
              <td>{item.survey_q4}</td>
              <td>{item.survey_q5}</td>
              <td>{item.survey_q6}</td>
              <td>{item.survey_q7}</td>
              <td>{item.survey_q8}</td>
              <td>{item.survey_q9}</td>
              <td>{item.survey_q10}</td>
              <td>{/* update button */}
                <button className="button" onClick={ () => this.props.dispatch({ type: 'UPDATE_ANSWER', payload: item.survey_id })}>UPDATE</button>
              </td>
              <td> {/* delete button */}
                <button className="button" onClick={ () => this.props.dispatch({ type: 'DELETE_ANSWER', payload: item.survey_id}) }>DELETE</button>
              </td>
            </tr>
            )}
        </table>
        {/* <p>{JSON.stringify(surveyResponse)}</p> */}
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(InfoPage);

// const mapStateToProps = state => ({
//   // secrets: state.secrets,
//   // user: state.user,
// });

// export default connect(mapStateToProps)(InfoPage);