import React, { Component } from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_ALL_SURVEYS'})
    // this.props.dispatch ({type: 'FETCH_NEW_SURVEY'})
    console.log('this.props.reduxStore.loadSurvey', this.props.reduxStore.loadSurvey);
  }

  update = () => {
    console.log('update clicked');
    
  }

  render() {
    const surveyResponse = this.props.reduxStore.loadSurvey
    console.log('hi', this.props.reduxStore);
    
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
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>County</th>
              <th>CoC</th>
              <th>Consent</th>
              <th>Fam_1</th>
              <th>Hx_2</th>
              <th>Fam_2</th>
              <th>Initials</th>
              <th>HH_2</th>
              <th>HH_3</th>
              <th>Age</th>
              <th>Id_1</th>
              <th>Id_2</th>
              <th>Id_3</th>
              <th>Vet_1</th>
              <th>Vet_2</th>
              <th>Vet_3</th>
              <th>Benefits</th>
              <th>Hx_3</th>
              <th>Hx_4</th>
              <th>Hx_5</th>
              <th>Hx_6</th>
              <th>Disab_1</th>
              <th>Disab_2</th>
              <th>Disab_3</th>
              <th>Disab_4</th>
              <th>Disab_5</th>
              <th>Disab_6</th>
              <th>Disab_7</th>
              <th>DV</th>
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
              <td>{item.survey_q11}</td>
              <td>{item.survey_q12}</td>
              <td>{item.survey_q13}</td>
              <td>{item.survey_q14}</td>
              <td>{item.survey_q15}</td>
              <td>{item.survey_q16}</td>
              <td>{item.survey_q17}</td>
              <td>{item.survey_q18}</td>
              <td>{item.survey_q19}</td>
              <td>{item.survey_q20}</td>
              <td>{item.survey_q21}</td>
              <td>{item.survey_q22}</td>
              <td>{item.survey_q23}</td>
              <td>{item.survey_q24}</td>
              <td>{item.survey_q25}</td>
              <td>{item.survey_q26}</td>
              <td>{item.survey_q27}</td>
              <td>{item.survey_q28}</td>
              <td>{item.survey_q29}</td>
              <td>{item.survey_q30}</td>
              <td>{item.survey_q31}</td>
              <td>{item.survey_q32}</td>
              <td>{/* update button */}
                <button className="button" onClick={ () => this.props.dispatch({ type: 'UPDATE_ANSWER', payload: item.survey_id })}>UPDATE</button>
              </td>
              {/* <td>
                <button className="button" onClick={ () => this.props.dispatch({ type: 'DELETE_ANSWER', payload: item.survey_id}) }>DELETE</button>
              </td> */}

              <td> {/* delete button with alert*/}
                <button className="button" onClick={ () => { confirmAlert({
                      title: 'Are you sure?',
                      message: 'Data cannot be recovered once deleted.',
                      buttons: [
                        { label: 'Nevermind, take me back', onClick: () => console.log('delete canceled')
                      },
                        { label: 'Yes, Delete',
                          onClick: () => this.props.dispatch({ type: 'DELETE_ANSWER', payload: item.survey_id}) 
                        }
                      ]
                    });
                  }}>DELETE</button>
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