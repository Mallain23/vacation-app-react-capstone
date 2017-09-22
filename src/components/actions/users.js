import {SubmissionError} from 'redux-form';

import {normalizeResponseErrors} from './utils';

const API_BASE_URL = 'https://thawing-crag-61618.herokuapp.com/api'

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL';
export const closeAuthModal = () => ({
    type: CLOSE_AUTH_MODAL
});

export const OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
export const openLoginForm = () => ({
    type: OPEN_LOGIN_FORM
});

export const OPEN_SIGNUP_FORM = 'OPEN_SIGNUP_FORM';
export const openSignupForm = () => ({
    type: OPEN_SIGNUP_FORM
});
