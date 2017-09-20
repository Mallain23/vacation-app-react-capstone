import React from 'react';
import { connect } from 'react-redux';

import { setEditPostToFalse } from '../actions/posts';

import './Navigation.css';

export class Circle extends React.Component {
    constructor (props) {
          super(props)

          this.handleCreatePostClick = this.handleCreatePostClick.bind(this)
    };

    handleCreatePostClick (e) {
      e.preventDefault();
      this.props.dispatch(setEditPostToFalse());

      this.props.history.push(`../create-post`)
    };

    render() {

        return (
            <div className='col-xs-3 col-md-1 cirlce-container'>
                <a onClick={this.handleCreatePostClick} className='round-button nav-heading nav-links right-side'><div className='plus'>+</div></a>
            </div>

        );
    };
};

export default connect()(Circle)
