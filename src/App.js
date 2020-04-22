import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username : 'Ishita'
  }

  userNameChangedEvent = (event) =>{
    this.setState({username: event.target.value});
  }

  render() {
  return (
      <div className="App">
        <UserInput usernameChanged = {this.userNameChangedEvent} currentUsername = {this.state.username}/>
        <UserOutput username = {this.state.username}/>
        <UserOutput username = {this.state.username}/>
        <UserOutput username = 'max'/>
      </div>
    );
  }
}

export default App;
