import React from 'react'
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { findAllPermitsAction } from '../../actions/find.all.permits.action';
import { Link } from 'react-router-dom'
import { Permit } from '../../models/permit';
import { NavBarComponent } from '../navbar/navbar.component';



interface IAllPerimitsState {
    permits: Permit []
}
export class PermitsComponent extends React.Component<any>{

    constructor(props) {
        super(props);
        this.state = {
            permits: []
        }
    }

    componentDidMount(){
        this.props.findPermits()
    }

    permitTable(permits){
        
        let result = (<></>);
        
        if(permits) {
            result = permits.map((permit) => {
                return (
                    <tr key={permit.permitId}>
                        <td>{permit.permitId}</td>
                        {/* <td><Link to={'/reimbursements/author/userId/' + permit.permitId}>{permit.username}</Link></td> */}
                        <td><Link to={'/permit/spot/' + permit.parkingSpot}>{permit.parkingSpot}</Link></td>
                        <td>{permit.vehicleLicense}</td>
                        <td>{permit.initialDate}</td>
                        <td>{permit.expiryDate}</td>
                        {/* <td><button className="btn btn-primary"><Link to={'/permit/add'} style={{color:"white", textDecoration:"none"}}>Add</Link></button></td> */}
                        <td><button className="btn btn-primary"><Link to={'/permit/' + permit.permitId} style={{color:"white", textDecoration:"none"}}>Edit</Link></button></td>
                    </tr>)
            })
        }

        return result;
    }

    render(){
        const permits = this.props.allPermits
        return(
            <div>
               <NavBarComponent/>
                <br/>
            <h1>Get All Permits</h1>
                {/* {JSON.stringify(this.props.allPermits)} */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Permit ID</th>
                            <th>Parking Spot</th>
                            <th>Vehicle License</th>
                            <th>Initial Date</th>
                            <th>Expiry Date</th>
                            <th>Update</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.permitTable(permits)}
                    </tbody>
                </table>
                <br/>
                <button className="btn btn-primary"><Link to={'/permit/add'} style={{color:"white", textDecoration:"none"}}>Add a new permit</Link></button>
            </div>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        allPermits: state.allPermits.permits
    }
}

const mapDispatchToProps = {
    findPermits: findAllPermitsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(PermitsComponent)