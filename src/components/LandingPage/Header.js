import React from 'react'

import './LandingPage.css';

export default function Header (props) {
    return (
        <div className='row'>
            <div className='col-xs-12 header'>
                  <h1 className='page-title'>Vacay Away</h1>
                  <p className='catch-phrase'>Start Planning.</p>
            </div>
        </div>
    );
};
