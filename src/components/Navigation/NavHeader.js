import React from 'react';
import { connect } from 'react-redux';

import { resetSliceIndex } from '../actions/posts';

import './Navigation.css'

export class NavHeader extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
  };

    handleClick(e) {
        e.preventDefault();
        console.log(this.props);
        this.props.dispatch(resetSliceIndex());
        this.props.history.push('/');
  };

    render() {
        const { col } = this.props;
        const { loggedIn } = this.props

        const navLink = loggedIn ?  <a className='title profile-btn' onClick={this.handleClick} > Vacay Away</a> :
                                    <a className='title' href='/#landing-page-header' > Vacay Away</a>;

        return (
            <div className={col}>
                    <h1 className='nav-app-title'>
                    {navLink}
                    </h1>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { currentUser } = state.auth;

    return {
        loggedIn: currentUser !== null,
    };
};

export default connect(mapStateToProps)(NavHeader);
