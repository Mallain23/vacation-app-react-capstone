import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {resetSliceIndex} from '../actions/posts';

import './Navigation.css'
import LoggedOutNav from './LoggedOutNav'
import LoggedInNav from './LoggedInNav'

export class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    };

    handleClick() {
        this.props.dispatch(resetSliceIndex())
        this.props.history.push('/')
    };

    render() {
        const navButtons = this.props.isLoggedIn ? <LoggedInNav {...this.props} /> : <LoggedOutNav {...this.props} />

        return (
            <nav className='navigation'>
                <div className='container'>
                    <div className='row middle-xs'>
                        <div className='col-xs-12 col-md-2'>
                            <div className='box'>
                                <h1 className='nav-app-title'><a onClick={this.handleClick}> Vacay Away</a></h1>
                            </div>
                        </div>
                        {navButtons}
                    </div>
                </div>
            </nav>
        );
    };
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Navigation)
