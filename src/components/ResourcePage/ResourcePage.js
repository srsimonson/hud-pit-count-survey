import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResourcePage extends Component {

  state = {
    toggleValue: 0,
    resource_id: '',
    resource_name: '',
    resource_phone: '',
    resource_location: '',
    resource_target: ''
  }

  componentDidMount = () => {
    this.props.dispatch ({ type: 'FETCH_RESOURCES' })
  }

  handleChange = (event) => {
    console.log('event.target.value', event.target.value);
    this.setState({
      ...this.state, // what does this do? works both with and without this.
      [event.target.name]: event.target.value
    });
  }

  updateResource = () => {
    this.props.dispatch({ 
      type: 'UPDATE_RESOURCE',
      payload: {
        resource_name: this.state.resource_name,
        resource_phone: this.state.resource_phone,
        resource_location: this.state.resource_location,
        resource_target: this.state.resource_target,
        id: this.state.resource_id
      }
    });
    this.props.dispatch ({ type: 'FETCH_RESOURCES' })
    this.setState({ toggleValue: 0 });
  }

  render() {
    return (
      <div>
          <br/>
        <h1>Count complete! 
          <br/>
        Thank you for your participation. 
        </h1>
        <ul> {/* Display list of resources. */}
          {this.props.reduxStore.resourceReducer.map(item =>
            <li key={item.id} className="container">
              {
                this.state.toggleValue !== item.resource_id 
                ? 
                  <div className="content">
                    <h3>{item.resource_name}</h3> 
                    <p>{item.resource_phone}</p> 
                    <p>{item.resource_location}</p>
                    <p>Population Served: {item.resource_target}</p>
                    <button className="button" onClick={ () => { this.setState({ toggleValue: item.resource_id, resource_id: item.resource_id });
                    }}>UPDATE</button> 
                  </div> 
                :
                  <form className="content"> {/* Toggle to edit list of resources. */}
                    <label>Agency:</label> <input name="resource_name" placeholder={item.resource_name} onChange={this.handleChange}></input>
                    <label>Phone:</label> <input name="resource_phone"  placeholder={item.resource_phone} onChange={this.handleChange}></input>
                    <label>Address:</label> <input name="resource_location" placeholder={item.resource_location} onChange={this.handleChange}></input>
                    <label>Population Served:</label> <input name="resource_target" placeholder={item.resource_target} onChange={this.handleChange}></input>
                    <br/>
                    <button className="button success" onClick={this.updateResource}>SAVE</button>
                  </form>
              }         
            </li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(ResourcePage);