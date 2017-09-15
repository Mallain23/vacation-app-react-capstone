import React from 'react';
import  { connect } from 'react-redux';

export class PostButtons extends React.Component {

    render() {
        return (
            <div className='post-buttons'>
                <button className='oval-button post-button edit '>Edit</button>
                <button className='oval-button post-button delete'>Delete</button>
            </div>
        );
    };
};

export default connect()(PostButtons)
