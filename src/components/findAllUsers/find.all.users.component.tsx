import React from 'react'
import { IState } from '../../reducers';
import { findAllUsersAction } from '../../actions/find.all.users.action';
import { connect } from 'react-redux';


// const margins = { margin: 'auto'}
export class UsersComponent extends React.Component<any>{

    componentDidMount(){
        this.props.findUsers()
    }
    render(){
        return(
            <div>
                {JSON.stringify(this.props.allUsers)}
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