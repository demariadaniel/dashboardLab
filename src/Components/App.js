import React, { Component } from 'react';
import logo from './../Style/logo.svg';
import './../Style/App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Admin from './Admin';
// import users from './../Util/UserSeeds';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:8080/students')
      .then(res=>{
        this.setState({
          users: res.data
        })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <nav>
          <Link to="/"><button>Dashboard</button></Link>
          <Link to="/admin"><button>Admin</button></Link>
        </nav>
        <Switch>
          <Route path="/" exact render={(props)=>
              <Dashboard {...props} users={this.state.users}/>} 
            />
          <Route path="/admin" render={(props)=>
              <Admin {...props} users={this.state.users}/>}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
