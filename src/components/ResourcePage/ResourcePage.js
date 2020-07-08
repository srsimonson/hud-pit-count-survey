import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResourcePage extends Component {

  state = {
    user_id: this.props.reduxStore.user.id,
    surveyAnswer: '', // remove
    resource_id: '', // needed? remove?
    toggleValue: 0
  }

  componentDidMount = () => {
    this.props.dispatch ({ 
      type: 'FETCH_RESOURCES'
    })
    this.setState({
      user_id: this.props.reduxStore.user.id
    })
  }

  // handleChange = (event) => {
  //   console.log('AccordionView event.target.value', event.target.value);
  //   this.setState({
  //     surveyAnswer: event.target.value
  //   })
  // }

  // save = () => {
  //   this.props.dispatch({ 
  //     type: 'SAVE_ANSWER', 
  //     payload: this.state
  //   });
  // }

  // toggle = () => {
  //   this.setState({
  //     toggleValue: !this.state.toggleValue
  //   })
  //   console.log('toggle:', this.state.toggleValue);
    
  // }

  render() {
    return (
      <div>
        <h1>Resources</h1>
        {/* <ul>
          {this.props.reduxStore.resourceReducer.map(item =>
          <li key={item.id}>{item.resource_target} {item.resource_name} {item.resource_phone} {item.resource_location}        
          <button className="button" onClick={this.toggle}>UPDATE</button></li>)}
        </ul> */}

        <ul> {/* Display List of Info */}
          {this.props.reduxStore.resourceReducer.map(item =>
            <li key={item.id}>
              {
                this.state.toggleValue !== item.resource_id ? 
                  <div>
                    <h2>{item.resource_name}</h2> 
                    <p>{item.resource_phone}</p> 
                    <p>{item.resource_location}</p>
                    <p>Population Serves: {item.resource_target}</p>
                    <button className="button" onClick={ () => {       
                      this.setState({ toggleValue: item.resource_id }) 
                      console.log('item.id:', item.resource_id);
                    }}>UPDATE</button> 
                  </div>
                :
                  <div>
                    <p>Agency: <input placeholder={item.resource_name}></input></p>
                    <p>Phone: <input placeholder={item.resource_phone}></input></p>
                    <p>Address: <input placeholder={item.resource_location}></input></p>
                    <p>Population Served: <input placeholder={item.resource_target}></input></p>
                    <button className="button" onClick={ () => {       
                      this.setState({ toggleValue: 0 }) 
                      console.log('item.id:', item.resource_id);
                    }}>SAVE</button> 
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