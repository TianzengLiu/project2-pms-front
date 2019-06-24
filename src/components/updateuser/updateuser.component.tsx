import React from 'react'
import { Link, withRouter } from 'react-router-dom';
// import { deflate } from 'zlib';



export class UpdateUserComponent extends React.Component<any, any>  {
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

        let updateUser = {
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
            let id = this.props.match.params.edit_user_id
            const response = await fetch('http://localhost:8888/user/' + id, {
                method: 'PATCH',
                body: JSON.stringify(updateUser),
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
                    reimbursement: resBody
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
        const { username, passwd, first_name, last_name, email, address, role_id} = this.state
        return (
            <div className="updateUser">
                

                <br /><br /><h1>Update An  User</h1><br /><br />
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
                        <label htmlFor="inputAmount" style={{ float: "left" }}>Username</label>
                        <input type="text" name="username" value={username} onChange={this.changeHandler} className="form-control" id="inputAmount" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateSubmitted" style={{ float: "left" }}>Password</label>
                        <input type="password" name="passwd" value={passwd} onChange={this.changeHandler} className="form-control" id="inputDateSubmitted" placeholder="Password" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateResolved" style={{ float: "left" }}>First Name</label>
                        <input type="text" name="first_name" value={first_name} onChange={this.changeHandler} className="form-control" id="inputDateResolved" placeholder="First Name" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDescription" style={{ float: "left" }}>Last Name</label>
                        <input type="text" name="last_name" value={last_name} onChange={this.changeHandler} className="form-control" id="inputDescription" placeholder="Last Name" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputResolver" style={{ float: "left" }}>Email</label>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} className="form-control" id="inputResolver" placeholder="Email" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputStatus" style={{ float: "left" }}>Address</label>
                        <input type="text" name="address" value={address} onChange={this.changeHandler} className="form-control" id="inputStatus" placeholder="Address" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputType" style={{ float: "left" }}>Role ID</label>
                        <input type="text" name="role_id" value={role_id} onChange={this.changeHandler} className="form-control" id="inputType" placeholder="Role ID" />

                    </div>





                    <button type="submit" className="btn btn-primary" style={{ float: "left" }}>Update</button>
                </form>
                <br /><br /><br /><br /><br />
                <button className="btn btn-primary" style={{ float: "left", marginLeft: "3%" }}>
                    <Link to='/user' style={{ color: "black", textDecoration: "none" }}>Go back to users</Link>
                </button>
                <br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}


export default withRouter(UpdateUserComponent)