import React from 'react';
import './include/bootstrap'
import './App.css'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import { NavBarComponent } from './components/navbar/navbar.component'
import {HomeComponent} from './components/home/home.component'
import { financedashboard } from './components/dashboard/financedashboard';
 

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path='/home' component={HomeComponent}/>
        <Route path='/finance' component={financedashboard}/>

      </Switch>














    </div>













    </BrowserRouter>
  )
}

export default App;
