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
import  UpdateUserComponent  from './components/updateuser/updateuser.component';
import  AddPermitComponent  from './components/addpermit/addpermit.component';
import  FindByUsernameComponent  from './components/findByUsername/findByUsername.component';
import  FindBySpotComponent  from './components/findBySpot/findBySpot.component';
import  FindByLicenseComponent  from './components/findByLicense/findByLicense.component';
import  UpdatePermitComponent  from './components/findAllPermits/updatePermit/updatePermit.component';

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
        <Route exact path='/user/:edit_user_id' component={UpdateUserComponent}/>
        <Route exact path='/permit/add' component={AddPermitComponent}/>
        <Route exact path='/user/username/:username' component={FindByUsernameComponent}/>
        <Route exact path='/permit/spot/:parkingSpot' component={FindBySpotComponent}/>
        <Route exact path='/permit/license/:vehicleLicense' component={FindByLicenseComponent}/>
        <Route exact path='/permit/:edit_permit_id' component={UpdatePermitComponent}/>
        {/* <Route path='/finance' component={LoginComponent}/> */}

      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
