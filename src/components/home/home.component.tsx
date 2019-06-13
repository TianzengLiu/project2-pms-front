import React from 'react'
import {Link} from 'react-router-dom'
import {NavBarComponent} from '../navbar/navbar.component'

export class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <NavBarComponent />
                <h1> Welcome to Parking Managment System</h1>



            </div>
        )
    }
}