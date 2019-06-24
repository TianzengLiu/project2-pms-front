import React from 'react'
import { Link, withRouter } from 'react-router-dom';


export class AddUserComponent extends React.Component<any, any> {
    constructor(props) {
        super(props)

        //this.state fields need match the fields in console, for example, first_name is in the console
        this.state = {
            username: '',
            passwd: '',
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            role_id: ''
           
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault()
        console.log(this.state)
       //firstName should match the swagger JSON fields
        let newUser = {
            username: this.state.username,
            password: this.state.passwd,
            firstName: this.state.first_name,
            lastName: this.state.last_name,
            email: this.state.email,
            address: this.state.address,
            // roleId input in broswer is a string and the swagger is a Int so need to switch string to Int using +
            roleId: +this.state.role_id
          
        }

        try {

            const response = await fetch('http://localhost:8888/user', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(newUser),
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
        const { username, password, first_name, last_name, email, address, role_id } = this.state
        return (

            <div className="submitUser">
                

                <h1>Submit a new user </h1>
                <form onSubmit={this.submitHandler} style={{ width: "35%", marginLeft: "3%" }}>
                    <div className="form-group" >
                        <label htmlFor="inputAuthor" style={{ float: "left" }}>Username</label>
                        <input type="text" name="username" value={username} onChange={this.changeHandler} className="form-control" id="inputAuthor" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAmount" style={{ float: "left" }}>Password</label>
                        <input type="password" name="passwd" value={password} onChange={this.changeHandler} className="form-control" id="inputAmount" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateSubmitted" style={{ float: "left" }}>First Name</label>
                        <input type="text" name="first_name" value={first_name} onChange={this.changeHandler} className="form-control" id="inputDateSubmitted" placeholder="First Name" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateResolved" style={{ float: "left" }}>Last Name</label>
                        <input type="text" name="last_name" value={last_name} onChange={this.changeHandler} className="form-control" id="inputDateResolved" placeholder="Last Name" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDescription" style={{ float: "left" }}>Email</label>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} className="form-control" id="inputDescription" placeholder="Email" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputResolver" style={{ float: "left" }}>Address</label>
                        <input type="text" name="address" value={address} onChange={this.changeHandler} className="form-control" id="inputResolver" placeholder="Address" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputResolver" style={{ float: "left" }}>Role ID</label>
                        <input type="text" name="role_id" value={role_id} onChange={this.changeHandler} className="form-control" id="inputResolver" placeholder="Role ID" />

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


export default withRouter(AddUserComponent)