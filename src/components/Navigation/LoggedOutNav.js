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
                <div className='col-xs-12 col-md-10'>
                   <Link className='nav-links marg-right' to='/home#overview'>Overview</Link>
                   <Link className='nav-links marg-right' to='/home#destination'>Where to go</Link>
                   <Link className='nav-links marg-right' to='/home#lodging'>Where to stay</Link>
                   <Link className='nav-links marg-right' to='/home#acitvities' >What to do</Link>
               </div>
               <LoginButtons />
            </div>
        );
    };
};

export default connect()(LoggedOutNav);
