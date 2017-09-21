import React from 'react';
import {connect} from 'react-redux';

import { formatPosts, favoritesLanguage } from './utils';

import ProfileButtons from './ProfileButtons';
import Post from '../Home/Post';

import './ProfilePage.css';

export function UserFavorites (props) {

    const { favorites, newPropObj } = props
    const userFavorites = formatPosts(favorites, newPropObj, favoritesLanguage)

    return (
        <div className='col-xs-12'>
            {userFavorites}
        </div>
    );
};


const mapStateToProps = (state, props) => {
    const newPropObj = Object.assign({}, props)
    const { favorites } = state.profile
    const { currentUser } = state.auth
    const username = currentUser.username

    return {
        favorites,
        currentUser,
        newPropObj,
        username
    };
}

export default connect(mapStateToProps)(UserFavorites)
