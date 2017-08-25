import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './Navigation.css'
import NavButtons from './NavButtons'

export default class Navigation extends React.Component {

  render() {

    return (
        <nav className='navigation'>
            <div className='container'>
                <div className='row middle-xs'>
                    <div className='col-xs-12 col-md-2'>
                        <div className='box'>
                            <h1 className='nav-app-title'><Link to='/'>Vacay Away</Link></h1>
                        </div>
                    </div>
                    <NavButtons {...this.props} />
                </div>
            </div>
        </nav>
    )
  }
}
