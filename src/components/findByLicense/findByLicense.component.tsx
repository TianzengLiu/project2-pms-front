import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'


export class FindByLicenseComponent extends React.Component<any, any>  {
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
            permit: null
        }
    }

    

    getLicense = async () => {

        console.log('trying to get individual user')
        console.log(this.props) 

        try {
            let license = this.props.match.params.vehicleLicense
            const response = await fetch('http://localhost:8888/permit/license/' + license, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
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
                    permit : resBody[0]
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


    //call the function getAllUsers() after first time render the page, this is the second time render the getAllUsers()
    componentDidMount() {
        this.getLicense()
    }




    render() {
        return (
            <div className ="permit"> 
            
            <br/><br/><h1>I am an individual permit</h1><br/><br/>
             {/* we need && to check the this.state.user to see if it is truthy because we render this first time,
             the initial state is null if not check then break in the first time*/}
             {/* <p>{this.state.user && this.state.user.username}</p> */}
            {/* we can not put object directly in the Dom, we need JSON.stringify to transfer to "json" string
             to display in the browser */}
            {/* {JSON.stringify(this.state)} */}
             
            <h4 className="center">Find permit by Vehicle License: {this.state.permit && this.state.permit.permitId}</h4>
            <p>Parking Spot: {this.state.permit && this.state.permit.parkingSpot}</p>
            <p>Vehicle License: {this.state.permit && this.state.permit.vehicleLicense}</p>
            <p>Initial Date: {this.state.permit && this.state.permit.initialDate}</p>
            <p>Expiry Date: {this.state.permit && this.state.permit.expiryDate}</p>

            <button className="btn btn-primary">
                <Link to='/permit/' style={{color:"black", textDecoration:"none"}}>Go back to permits</Link>
                </button>
            </div>
        )
    }
}

export default withRouter(FindByLicenseComponent)
