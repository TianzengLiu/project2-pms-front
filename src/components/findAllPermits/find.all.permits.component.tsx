import React from 'react'
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { findAllPermitsAction } from '../../actions/find.all.permits.action';
import { Link } from 'react-router-dom'
import { Permit } from '../../models/permit';



interface IAllPerimitsState {
    users: Permit []
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
                        <td><Link to={'/users/' + permit.permitId}>{permit.permitId}</Link></td>
                        {/* <td><Link to={'/reimbursements/author/userId/' + permit.permitId}>{permit.username}</Link></td> */}
                        <td>{permit.parkingSpot}</td>
                        <td>{permit.vehicleLicense}</td>
                        <td>{permit.initialDate}</td>
                        <td>{permit.expiryDate}</td>
                    </tr>)
            })
        }

        return result;
    }

    render(){
        const permits = this.props.allPermits
        return(
            <div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.permitTable(permits)}
                    </tbody>
                </table>
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