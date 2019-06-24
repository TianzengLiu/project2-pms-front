import React from 'react';
import './include/bootstrap'
import './App.css'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBarComponent } from './components/navbar/navbar.component'
import HomeComponent from './components/home/home.component'
import { Provider } from 'react-redux';
import { store } from './store';
import Financedashboard from './components/financedashboard/financedashboard';
import UsersComponent from './components/findAllUsers/find.all.users.component';
import PermitsComponent from './components/findAllPermits/find.all.permits.component';
import  UserComponent  from './components/usercomponent/user.component';
import  AddUserComponent  from './components/addUser/addUser.component';

const App: React.FC = () => {
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <div className="App">
      {/* <NavBarComponent/> */}
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path='/home' component={HomeComponent}/>
        <Route path='/finance' component={Financedashboard}/>
        <Route exact path='/user' component={UsersComponent} />
        <Route exact path='/permit' component={PermitsComponent}/>
        <Route exact path='/user/userId/:user_id' component={UserComponent}/>
        <Route exact path='/user/add' component={AddUserComponent}/>
        {/* <Route path='/finance' component={LoginComponent}/> */}

      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
