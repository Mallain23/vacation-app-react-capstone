import React from 'react'
import {Link} from 'react-router-dom';

import './Navigation.css'
import NavButtons from './NavButtons'

export default function Navigation (props) {

        return (
            <nav className='navigation'>
                <div className='container'>
                    <div className='row middle-xs'>
                        <div className='col-xs-12 col-md-2'>
                            <div className='box'>
                                <h1 className='nav-app-title'><Link to='/'>Vacay Away</Link></h1>
                            </div>
                        </div>
                        <NavButtons {...props} />
                    </div>
                </div>
            </nav>
    )
}
