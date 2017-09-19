import React from 'react';

import './LandingPage.css';

export default function AppFeatures(props) {
    return (
        <div id='app-features'>
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <img src='' />
                </div>
                <div className='col-xs-12 col-md-6'>
                    <div id='search'>
                        <h2 className='search-title'>Search for Posts</h2>
                        <p className='search-text'>Vacay Away has a great search feature, which allows users to search for posts by keywords. This makes its quick and easy to find posts that are relevant to what your interested in!</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-12 col-md-6'>
                    <div id='ideas'>
                        <h2 className='ideas-title'>Find Ideas For Your Next Trip</h2>
                        <p className='ideas-text'> Every post has a section which highlight ...  This way other users can use this advice to plan the vacation of their dreams!</p>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <img src='' />
                </div>
                <div className='col-xs-12 col-md-6'>
                    <div id='share'>
                        <h2 className='share-title'>Share your experiences with others</h2>
                        <p className='share-text'>After you plan and enjoy your perfect vacation, make sure to share your experiences with others! Share what you liked about your trip and what you would do differently. The more information you can provide the better!</p>
                    </div>
                </div>
            </div>
    </div>
    );
};
