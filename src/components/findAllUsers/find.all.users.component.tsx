import React from 'react'
import { IState } from '../../reducers';
import { findAllUsersAction } from '../../actions/find.all.users.action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { User } from '../../models/user';

interface IAllUsersState {
    users: User []
}

// const margins = { margin: 'auto'}
export class UsersComponent extends React.Component<any>{

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        this.props.findUsers()
    }

    userTable(users) {
        
        let result = (<></>);
        
        if(users) {
            result = users.map((user) => {
                return (
                    <tr key={user.userId}>
                        <td><Link to={'/users/' + user.userId}>{user.userId}</Link></td>
                        <td><Link to={'/reimbursements/author/userId/' + user.userId}>{user.username}</Link></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.role.roleName}</td>
                    </tr>)
            })
        }

        return result;
    }

    render(){
        const users = this.props.allUsers
        console.log( this.props.allUsers)
        return (
            <div>
                <br/>
            <h1>Get All Users</h1>
                {/* {JSON.stringify(this.props.allUsers)} */}

                <table className="table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userTable(users)}
                    </tbody>
                </table>
            </div>
            
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        allUsers: state.allUsers.users
    }
}

const mapDispatchToProps ={
    findUsers: findAllUsersAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)