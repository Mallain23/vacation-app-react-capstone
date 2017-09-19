import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import DropdownLink from './DropdownLink';

import LoggedOutNav from './LoggedOutNav';
import LoggedInNav from './LoggedInNav';

import './Navigation.css';

export class Navigation extends React.Component {

    render() {
        const navButtons = this.props.isLoggedIn ? <LoggedInNav {...this.props} /> :
                                                   <LoggedOutNav {...this.props} />;

        return (
            <div className='navigation'>
                <div className='container'>
                  {navButtons}
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Navigation)
