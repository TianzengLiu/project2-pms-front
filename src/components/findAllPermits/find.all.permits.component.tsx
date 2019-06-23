import React from 'react'
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { findAllPermitsAction } from '../../actions/find.all.permits.action';

export class PermitsComponent extends React.Component<any>{

    componentDidMount(){
        this.props.findPermits()
    }

    render(){
        return(
            <div>
                {JSON.stringify(this.props.allPermits)}
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