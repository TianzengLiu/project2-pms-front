import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
// import { IState, IReimbursement } from '../../reducers';
// import { getreimbursementbyid, refresh } from '../../actions/reimbursementactions';
// import { connect } from 'react-redux';
// import { updateinfobyid } from '../../actions/updatereimbursementaction';




export class SignUpButton extends React.Component<any, any> {



    constructor(props: any) {
        super(props);

        this.state = {
            modal: false,
            firstname: '',
            lastname: '',
            username: '',
            Unitno: '',
            licenseno: '',
            address: ''

        };
    }


    handleChange =(field:string) => (event:any) => {
        this.setState({
            ...this.state,
            [field]: event.target.value
        })

    }

    //functtion to insert user info to the database
    registerfunc = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        //     //console.log('trying to update reim',this.amountref.value)
        //     //  console.log('im gonna update to this reimburs::',reimbursment)
        //     //  this.props.updateinfobyid(reimbursment);
        //     //  this.toggle();

        const firstname = this.state.firstname
        const lastname = this.state.lastname
        const username = this.state.username
        const password = this.state.password
        const email = this.state.email
        const address = this.state.address

        const credentials = {
            firstname,
            lastname,             
            username,   
            password,
            email,                     
            address
        }

        //Action to update users
        // this.props.updateinfobyid(reimbursment)

    }

    toggle = () => {
        this.setState((prevState: { modal: any; }) => ({
            modal: !prevState.modal
        }));
    }

    render() {
        // console.log('this is my user : to edit::', this.props.reimbursement)
        
        //Deconstruction from info with get from the store as props
        // const {
        //     amount,
        //     description,
        //     status,
        //     reimbursementtype } = this.props.reimbursement;

        return (
            <div>
                <Button id='font' color="primary" onClick={this.toggle}>Sign Up</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Sign Up Information</ModalHeader>
                    <ModalBody>
                        
                        <Form onSubmit={this.registerfunc}>
                            <div className="form-group">
                                <input
                                    className='my-2 form-control'
                                    placeholder="First Name"
                                    onChange={this.handleChange('firstname')}
                                    value={this.state.firstname} />
                            </div>
                            <div className="form-group">
                                <input
                                    className='my-2 form-control'
                                    placeholder="Last Name"
                                    onChange={this.handleChange('lastname')}
                                    value={this.state.lastname}/>
                            </div>
                            <div className="form-group">
                            <input
                                    className='my-2 form-control'
                                    placeholder="Username"
                                    onChange={this.handleChange('username')}
                                    value={this.state.username}/>
                                
                            </div>
                            <div className="form-group">
                            <input
                                    className='my-2 form-control'
                                    placeholder="Password"
                                    onChange={this.handleChange('password')}
                                    value={this.state.password}/>
                            </div>
                            <div className="form-group">
                            <input
                                    className='my-2 form-control'
                                    placeholder="Email"
                                    onChange={this.handleChange('email')}
                                    value={this.state.email}/>
                            </div>
                            <div className="form-group">
                            <input
                                    className='my-2 form-control'
                                    placeholder="Address"
                                    onChange={this.handleChange('email')}
                                    value={this.state.address}/>
                            </div>

                            <br></br>

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.registerfunc}>Update</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );



    }
}

// Redox stuff

// const mapStateToProps = (state: IState) => {
//     return {
//         statelist: state.listReimbursementbyidstate,
//         userstatelist: state.userinfostate
//     }


// }

// const mapDispatchToProps = {
//     getreimbursementbyid: getreimbursementbyid,
//     refresh: refresh,
//     updateinfobyid: updateinfobyid
// }


// export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserButton)