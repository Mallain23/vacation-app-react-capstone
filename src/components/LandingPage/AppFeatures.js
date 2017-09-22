import React from 'react';

import './LandingPage.css';

export default function AppFeatures(props) {
    return (
        <div id='app-features'>
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <img className='travel-img' alt='travel' src='http://static.atimes.com/uploads/2015/10/Khajuraho-Temple-3.jpg' />
                </div>
                <div className='col-xs-12 col-md-6'>
                    <div id='search'>
                        <h2 className='search-title'>Search for Posts</h2>
                        <p className='search-text'>Vacay Away has a great search feature, which allows users to search for posts by keywords. This makes its quick and easy to find posts that are relevant to what you are interested in!</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-12 col-md-6'>
                    <div id='ideas'>
                        <h2 className='ideas-title'>Find Ideas For Your Next Trip</h2>
                        <p className='ideas-text'> Every post contains details about where apeople went, were they ate, where they stayed, what they did, and what they liked and did not like about their trip. Users can save userful posts to their favorites, and use this advice to plan the vacation of their dreams!</p>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <img className='travel-img' alt='travel' src='https://kauaivacationtours.com/files/2011/01/Kauai-Zipline-n-Dip-Tour.jpg'/>
                </div>
            </div>
            <div className='row share-row'>
                <div className='col-xs-12 col-md-4'>
                    <img className='travel-img' alt='travel' src='http://cdn.toplisttips.com/wp-content/uploads/2014/11/Taking-picture-everywhere.jpg' />
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
