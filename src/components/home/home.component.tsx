import React from 'react'
import {Link} from 'react-router-dom'
import {NavBarComponent} from '../navbar/navbar.component'
import LoginComponent from '../form/login.component'

export class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <NavBarComponent />
                <LoginComponent/>

            </div>
        )
    }
}