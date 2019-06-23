import React from 'react'
// import { SignUpButton } from '../navbar/signup.component';
import { IState } from '../../reducers';
import { loginaction } from '../../actions/login.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export class HomeComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            username: '',
            password: '',


        };
    }


    updateUsername = (event) => {
        // console.log(event)
        this.setState({
            username: event.target.value
        })
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    //functtion to insert user info to the database
    loginfunc = (event) => {
        event.preventDefault()
        
        this.props.login(this.state.username, this.props.history, this.state.password)



        // this.props.history.push('/mooom')
        // console.log(this.props.currentUser)
        // if (this.props.currentUser === null) {
        //     console.log('waiting')
        // }
        // if (this.props.currentUser) {

        //     const password = this.state.password
        //     const storepassword = this.props.currentUser.password
        //     const role = this.props.currentUser.role.roleId

        //     if (password == storepassword && role == 1) {
        //         this.props.history.push('/finance')
        //     } else {
        //         this.props.history.push('/')
        //     }

        // }
            // const password = this.state.password
            // const storepassword = this.props.currentUser.password
            // const role = this.props.currentUser.role.roleId

            // if (password == storepassword && role == 1) {
            //     this.props.history.push('/finance')
            // } else {
            //     this.props.history.push('/')
            // }



    }

    componentDidMount() {
        // console.log(this.props.currentUser)

    }




    render() {
        return (


            <div id='back'>
                <div id='formid'>
                    <form onSubmit={this.loginfunc}>
                        <div className="form-group" />
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <input type="text" className="form-control" onChange={this.updateUsername} value={this.state.username} placeholder="Enter Username" />
                        <br></br>
                        <div className="form-group">
                            {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                            <input type="password" className="form-control" onChange={this.updatePassword} value={this.state.password} placeholder="Password" />
                        </div>


                        <button id='font' type="submit" className="btn btn-primary form-control">Submit</button>
                        <br></br><br></br>
                        {/* <div><p id='font'>New User?</p> <SignUpButton /></div> */}
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: IState) => {
    return {
        currentUser: state.login.currentUser
    }
}


const mapDispatchToProps = {
    login: loginaction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeComponent))