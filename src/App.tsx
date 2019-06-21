import React from 'react';
import './include/bootstrap'
import './App.css'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { Provider } from 'react-redux';
import { store } from './store';
import UsersComponent from './components/findAllUsers/find.all.users.component';
 

const App: React.FC = () => {
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <div className="App">
      <NavBarComponent/>
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route exact path='/user' component={UsersComponent} />
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
