import React from 'react'
import { SignUpButton } from '../navbar/signup.component';

export class LoginComponent extends React.Component {
    render() {
        return (
            <div id='back'>
                <div id='formid'>
                <form>
                    <div className="form-group"/>
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <br></br>
                    <div className="form-group">
                            {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                   
                    <button id='font' type="submit" className="btn btn-primary form-control">Submit</button>
                    <br></br><br></br>
                    <div><p id='font'>New User?</p> <SignUpButton/></div>
                </form>
                </div>
            </div>
                        )
                    }
                }
