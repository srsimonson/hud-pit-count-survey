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
    console.log('this.state', this.state);
    
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
    this.setState({ toggleValue: 0 })
  }

  render() {
    return (
      <div>
        <h1>Resources</h1>
        <ul> {/* Display List of Info */}
          {this.props.reduxStore.resourceReducer.map(item =>
            <li key={item.id}>
              {
                this.state.toggleValue !== item.resource_id 
                ? 
                  <div>
                    <h2>{item.resource_name}</h2> 
                    <p>{item.resource_phone}</p> 
                    <p>{item.resource_location}</p>
                    <p>Population Served: {item.resource_target}</p>
                    <button className="button" onClick={ () => { this.setState({ toggleValue: item.resource_id, resource_id: item.resource_id });
                    }}>UPDATE</button> 
                  </div>
                :
                  <div>
                    <label>Agency:</label> <input name="resource_name" placeholder={item.resource_name} onChange={this.handleChange}></input>
                    <label>Phone:</label> <input name="resource_phone"  placeholder={item.resource_phone} onChange={this.handleChange}></input>
                    <label>Address:</label> <input name="resource_location" placeholder={item.resource_location} onChange={this.handleChange}></input>
                    <label>Population Served:</label> <input name="resource_target" placeholder={item.resource_target} onChange={this.handleChange}></input>
                    <button className="success button" onClick={this.updateResource}>SAVE</button>
                      
                       {/* () => {        
                       this.setState({ toggleValue: 0 }) 
                       console.log('save:', this.state);
                     }}>SAVE</button>  */}
                  </div>
              }         
            </li>)}
        </ul>








          {/* THIS IS ALL GOOD */}


        {/* {this.state.toggleValue ? 
        <ul> {/* Display List of Info 
          {this.props.reduxStore.resourceReducer.map(item =>
            <li key={item.id}>

              {item.resource_target} {item.resource_name} {item.resource_phone} {item.resource_location}
                      
            <button className="button" 
            onClick={ () => {      
              if (item.resource_name === item.resource_name) {
                console.log(`this resource is: ${item.resource_name}`);
                
              } 
                this.setState({
                  toggleValue: !this.state.toggleValue
            })
          }}>UPDATE</button></li>)}
        </ul> 
        : 
        <ul> {/* Edit List of Info 
          {this.props.reduxStore.resourceReducer.map(item =>
          <li key={item.id}> <input placeholder={item.resource_target}></input> 
            <input placeholder={item.resource_name}></input> <input placeholder={item.resource_phone}></input> <input placeholder={item.resource_location}></input>        
          <button className="button" 
            onClick={ () => {       
            // console.log('this resource is:', item.resource_name);
            this.setState({
              toggleValue: !this.state.toggleValue
        })
          }}>SAVE</button></li>)}
        </ul>} */}
        {/* <button className="button">SAVE</button> */}
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(ResourcePage);