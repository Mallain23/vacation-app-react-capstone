import React from 'react';

import './LandingPage.css';

export default function About (props) {
    return (
        <div id='about'>
            <div className='row'>
                <div className='col-xs-12 col-md-6'>
                    <div id='overview'>
                        <h2 className='overview-title'>Plan your perfect vacation</h2>
                        <p className='overview-text'>  Vacay Away helps you plan the vacation of your dreams! An easy way to find advice on where to go, where to stay, where and what to eat, and what to do and not to do while on your dream vacation! </p>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div id='about-img'>
                        <img className='overview-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQqQ9TseVsm43zotZSlIm5D_ANXpMKmBCbaGvjXR4rFsnQZWh' />
                    </div>
                </div>
            </div>
        </div>
    )
}
