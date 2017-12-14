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
    axios.get('/students')
      .then(res=>{
        this.setState({
          users: res.data
        })
      })
  }
  apiCall=(method, student)=>{
    axios({
        method: method,
        url: '/students',
        data: student
    }).then(res => {
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
          <Link to="/"><button>View Dashboard</button></Link>
          <Link to="/admin"><button>View Admin</button></Link>
        </nav>
        <Switch>
          <Route path="/" exact render={(props)=>
              <Dashboard {...props} users={this.state.users}/>} 
            />
          <Route path="/admin" render={(props)=>
              <Admin {...props} users={this.state.users} apiCall={this.apiCall}/>}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
