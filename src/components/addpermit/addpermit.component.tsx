import React from 'react'
import { Link, withRouter } from 'react-router-dom';


export class AddPermitComponent extends React.Component<any, any> {
    constructor(props) {
        super(props)

        //this.state fields need match the fields in console, for example, first_name is in the console
        this.state = {
            permit_id: '',
            parking_spot: '',
            vehicle_license: '',
            initial_date: '',
            expiry_date: ''
           
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault()
        console.log(this.state)
       //firstName should match the swagger JSON fields
        let newPermit = {
            permitId: this.state.permit_id,
            parkingSpot: this.state.parking_spot,
            vehicleLicense: this.state.vehicle_license,
            initialDate: this.state.initial_date,
            expiryDate: this.state.expiry_date,
            
        }

        try {

            const response = await fetch('http://localhost:8888/permit', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(newPermit),
                headers: {
                    'Content-Type': 'application/json'
                }
            })



            console.log(response);

            // if(response.status === 401){
            //     this.setState({
            //         errorMessage:'Invalid Credentials'
            //     })
            // // } else 
            if (response.status === 200) {
                const resBody = await response.json()
                // resBody is an array of all Users
                console.log(resBody)
            }

            // this.setState({
            //     reimbursement : resBody
            // })
            // this.props.history.push('/users')

            // } else {
            //     document.getElementById('error-message').innerText = 'You Can\'t login right now'
            // } else if (response.status === 401) {
            //     alert('Unauthorized, please login first!')
            // }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { permit_id, parking_spot, vehicle_license, initial_date, expiry_date } = this.state
        return (

            <div className="submitPermit">
                

                <h1>Submit a new permit </h1>
                <form onSubmit={this.submitHandler} style={{ width: "35%", marginLeft: "3%" }}>
                    <div className="form-group" >
                        <label htmlFor="inputAuthor" style={{ float: "left" }}>Permit ID</label>
                        <input type="text" name="permit_id" value={permit_id} onChange={this.changeHandler} className="form-control" id="inputAuthor" placeholder="Permit ID" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAmount" style={{ float: "left" }}>Parking Spot</label>
                        <input type="text" name="parking_spot" value={parking_spot} onChange={this.changeHandler} className="form-control" id="inputAmount" placeholder="Parking Spot" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateSubmitted" style={{ float: "left" }}>Vehicle License</label>
                        <input type="text" name="vehicle_license" value={vehicle_license} onChange={this.changeHandler} className="form-control" id="inputDateSubmitted" placeholder="Vehicle License" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateResolved" style={{ float: "left" }}>Initial Date</label>
                        <input type="text" name="initial_date" value={initial_date} onChange={this.changeHandler} className="form-control" id="inputDateResolved" placeholder="Initial Date" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDescription" style={{ float: "left" }}>Expiry Date</label>
                        <input type="text" name="expiry_date" value={expiry_date} onChange={this.changeHandler} className="form-control" id="inputDescription" placeholder="Expiry Date" />

                    </div>


                    <button type="submit" className="btn btn-primary" style={{ float: "left" }}>Submit</button>
                </form>

                <br /><br /><br />


                {/* <h4 className="center">Submit reimbursement: {this.state.reimbursementId && this.state.reimbursementId}</h4>
            <p>First Name: {this.state.author && this.state.author}</p> 
            <p>Amount: {this.state.amount && this.state.amount}</p>
            <p>Date Submitted: {this.state.dateSubmitted && this.state.dateSubmitted}</p>
            <p>Date Resolved: {this.state.dateResolved && this.state.dateResolved}</p> 
            <p>description: {this.state.description && this.state.description}</p> 
            <p>Role: {this.state.resolver && this.state.resolver}</p> 
            <p>Role: {this.state.status && this.state.status}</p> 
            <p>Role: {this.state.type && this.state.type}</p>  */}

            </div>

        )
    }
}


export default withRouter(AddPermitComponent)