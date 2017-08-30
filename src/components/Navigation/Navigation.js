import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './Navigation.css'
import LoggedOutNav from './LoggedOutNav'
import LoggedInNav from './LoggedInNav'

export function Navigation (props) {

    const navButtons = props.isLoggedIn ? <LoggedInNav {...props} /> : <LoggedOutNav {...props} />
    
    return (
        <nav className='navigation'>
            <div className='container'>
                <div className='row middle-xs'>
                    <div className='col-xs-12 col-md-2'>
                        <div className='box'>
                            <h1 className='nav-app-title'><Link to='/'>Vacay Away</Link></h1>
                        </div>
                    </div>
                    {navButtons}
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Navigation)
