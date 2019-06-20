import React from 'react';
import './include/bootstrap'
import './App.css'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import { NavBarComponent } from './components/navbar/navbar.component'
import {HomeComponent} from './components/home/home.component'
import { Provider } from 'react-redux';
import { store } from './store';
import  LoginComponent  from './components/form/login.component';
// import { financedashboard } from './components/dashboard/financedashboard';
 

const App: React.FC = () => {
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path='/home' component={HomeComponent}/>
        {/* <Route path='/finance' component={LoginComponent}/> */}

      </Switch>














    </div>













    </BrowserRouter>
    </Provider>
  )
}

export default App;
