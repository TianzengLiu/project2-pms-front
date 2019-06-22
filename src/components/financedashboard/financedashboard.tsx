import React from 'react'
import { Link } from 'react-router-dom';
import  NavBarComponent  from '../navbar/navbar.component';

export default class Financedashboard extends React.Component {
    render() {
        return (
            <div>
            <NavBarComponent/>
            <div id="back">
            <span>
              <div className="card">
                <img src=""className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">All Users</h5>
                  <p className="card-text">This will allow you to see all users as a financial Manager</p>
                  <Link to="/users" className="btn btn-primary">View All Users</Link>
                </div>
              </div>
            </span>
            <span>
              <div className="card">
                <img src="" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Find Users by username</h5>
                  <p className="card-text">This will get all reimbursement information using the status</p>
                  <a href="#" className="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Enter Username</a>

                  <div className="collapse" id="collapseExample" >
                    <div className="card-body" id="inputbody">
                      <form >
                   <input className="form-control" placeholder="Username"></input>
                      <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="card">
                <img src=""className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Find All Permit information</h5>
                  <p className="card-text">This will allow you to see all permits as a financial Manager</p>
                  <Link to="/users" className="btn btn-primary">View All Permits</Link>
                </div>
              </div>
            </span>
            <span>
              <div className="card">
                <img src="" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Find permit information using a license </h5>
                  <p className="card-text">This will get all permit information using the license no.</p>
                  <a href="#" className="btn btn-primary" data-toggle="collapse" data-target="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">Enter license number</a>

                  <div className="collapse" id="collapseExample2" >
                    <div className="card-body" id="inputbody">
                      <form >
                   <input className="form-control" placeholder="License No."></input>
                      <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          </div>
        )
    }
}
