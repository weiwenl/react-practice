import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "swag Justin"
  }

  inputChangeHandler = (event) => {
    this.setState({username: event.target.value});
    console.log(this.state.username);
  }
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput (Done)</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs (Done)</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice) (Done)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there (Done)</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component (Done)</li>
          <li>Add a method to manipulate the state (=> an event-handler method) (Done)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event (Done)</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput (Done)</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username (Done)</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets (Done)</li>
        </ol>

        <UserInput change={this.inputChangeHandler} currentname={this.state.username}/>
        <UserOutput username={this.state.username} favDrink="coffee"/>
        <UserOutput username={this.state.username} favDrink="tea"/>
        <UserOutput username="Tim" favDrink="milk"/>
        <UserOutput username="Richard" favDrink="wine"/>
      </div>
    );
  }
}

export default App;
