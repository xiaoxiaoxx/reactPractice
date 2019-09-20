import React, { Component } from 'react';

import { BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import 'antd/dist/antd.css'

import './App.css';

class App extends Component {
  
  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Admin}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
