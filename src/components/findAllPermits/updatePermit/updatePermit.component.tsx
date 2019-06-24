import React from 'react'
import { Link, withRouter } from 'react-router-dom';
// import { deflate } from 'zlib';



export class UpdatePermitComponent extends React.Component<any, any>  {
    // state = {
    //     user : null
    // }
    // componentDidMount() {
    //     let id = this.props.match.params.user_id
    //     axios.get('http://localhost:3000/users/' + id)
    //     .then(res => {
    //         this.setState({
    //             user: res.data
    //         })
    //         console.log(res)
    //     })
    //     // console.log(this.props) 

    // }


    constructor(props) {
        super(props);
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

        let updatePermit = {
            permitId: this.state.permit_id,
            parkingSpot: this.state.parking_spot,
            vehicleLicense: this.state.vehicle_license,
            initialDate: parseInt(this.state.initial_date),
            expiryDate: parseInt(this.state.expiry_date)

        }

        try {
            let id = this.props.match.params.edit_permit_id
            const response = await fetch('http://localhost:8888/permit/' + id, {
                method: 'PATCH',
                body: JSON.stringify(updatePermit),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json' // "Content-Type" need match spring boot WebConfig
                    //.allowedHeaders("Content-Type", "header2", "Authorization") to avoid Cors Error
                }
            })

            console.log(response);

            // if(response.status === 401){
            //     this.setState({
            //         errorMessage:'Invalid Credentials'
            //     })
            // } else 
            if (response.status === 200) {
                const resBody = await response.json()
                // resBody is an array of all Users
                console.log(resBody)

                this.setState({
                    permit: resBody
                })
                // this.props.history.push('/users')

                // } else {
                //     document.getElementById('error-message').innerText = 'You Can\'t login right now'
            } else if (response.status === 401) {
                alert('Unauthorized, please login first!')
            }




        } catch (err) {
            console.log(err);
        }
    }


    render() {
        const { permit_id, parking_spot, vehicle_license, initial_date, expiry_date } = this.state
        return (
            <div className="updateUser">
                

                <br /><br /><h1>Update A Permit</h1><br /><br />
                {/* we need && to check the this.state.user to see if it is truthy because we render this first time,
             the initial state is null if not check then break in the first time*/}
                {/* <p>{this.state.user && this.state.user.username}</p> */}
                {/* we can not put object directly in the Dom, we need JSON.stringify to transfer to "json" string
             to display in the browser */}
                {/* {JSON.stringify(this.state)} */}
                {/*              
            <h4 className="center">Update Users: {this.state.user && this.state.user.userId}</h4>
            <p>Username: {this.state.user && this.state.user.username}</p>
            <p>First Name: {this.state.user && this.state.user.firstName}</p>
            <p>Last Name: {this.state.user && this.state.user.lastName}</p>
            <p>Email: {this.state.user && this.state.user.email}</p>
            <p>Role: {this.state.user && this.state.user.role}</p> */}


                <form onSubmit={this.submitHandler} style={{ width: "35%", marginLeft: "3%" }}>
                    {/* <div className="form-group" >
                        <label htmlFor="inputAuthor" style={{ float: "left" }}>Author</label>
                        <input type="text" name="author" value={author} onChange={this.changeHandler} className="form-control" id="inputAuthor" placeholder="Author" />
                    </div> */}

                    <div className="form-group">
                        <label htmlFor="inputAmount" style={{ float: "left" }}>Permit ID</label>
                        <input type="text" name="permit_id" value={permit_id} onChange={this.changeHandler} className="form-control" id="inputAmount" placeholder="Permit ID" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateSubmitted" style={{ float: "left" }}>Parking Spot</label>
                        <input type="text" name="parking_spot" value={parking_spot} onChange={this.changeHandler} className="form-control" id="inputDateSubmitted" placeholder="Parking Spot" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateResolved" style={{ float: "left" }}>Vehicle License</label>
                        <input type="text" name="vehicle_license" value={vehicle_license} onChange={this.changeHandler} className="form-control" id="inputDateResolved" placeholder="Vehicle License" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDescription" style={{ float: "left" }}>Initial Date</label>
                        <input type="text" name="initial_date" value={initial_date} onChange={this.changeHandler} className="form-control" id="inputDescription" placeholder="Initial Date" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputResolver" style={{ float: "left" }}>Expiry Date</label>
                        <input type="text" name="expiry_date" value={expiry_date} onChange={this.changeHandler} className="form-control" id="inputResolver" placeholder="Expiry Date" />

                    </div>

                   


                    <button type="submit" className="btn btn-primary" style={{ float: "left" }}>Update</button>
                </form>
                <br /><br /><br /><br /><br />
                <button className="btn btn-primary" style={{ float: "left", marginLeft: "3%" }}>
                    <Link to='/permit' style={{ color: "black", textDecoration: "none" }}>Go back to permits</Link>
                </button>
                <br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}


export default withRouter(UpdatePermitComponent)