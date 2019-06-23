import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import pmsLogo from '../../assets/rev-logo.png'  
import { SignUpButton } from './signup.component';
import { IState } from '../../reducers';
import { connect } from 'react-redux';

export class NavBarComponent extends React.Component<any,any>{
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
            <div className="navbar-header c-pointer shift-left">
              <Link to="/home" className="unset-anchor">
                <img className="img-adjust-position rev-logo" src={pmsLogo} alt="revature" />
              </Link>
            </div>
            {this.props.currentUser === null ?

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ml-auto margin-nav">
                <li className="nav-item active">
                  <Link to="/home" className="unset-anchor nav-link">Login</Link>
                </li>
                <li className="nav-item active">
                  <SignUpButton/>
                </li>
                </ul>
                </div>
                :
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav ml-auto margin-nav">
                  <li className="nav-item active">
                  <div className="unset-anchor nav-link">Welcome {this.props.currentUser && this.props.currentUser.firstName}</div>
                </li>               


                
               
              </ul>
            </div>
            }
          </nav>
            
        );
    }
}

const mapStateToProps = (state:IState) =>{
    return {
        currentUser: state.login.currentuser
    }
}


export default connect(mapStateToProps)(NavBarComponent)