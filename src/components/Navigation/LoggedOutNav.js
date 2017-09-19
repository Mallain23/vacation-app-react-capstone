import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import LoginButtons from './LoginButtons';
import NavHeader from './NavHeader';

import './Navigation.css'

export class LoggedOutNav extends React.Component {

    render() {

        return (
            <div className='row middle-xs'>
                <NavHeader col='col-xs-12 col-md-3' {...this.props}/>
                <div className='col-xs-12 col-md-8'>
                   <Link className='nav-links marg-right' to='/home#overview'>Overview</Link>
                   <Link className='nav-links marg-right' to='/home#destination'>App Features</Link>
                   <Link className='nav-links marg-right' to='/home#lodging'>Demo App</Link>
                </div>
               <LoginButtons />
            </div>
        );
    };
};

export default connect()(LoggedOutNav);
