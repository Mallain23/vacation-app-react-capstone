import React from 'react';
import  { connect } from 'react-redux';

import {deletePost} from '../actions/ajaxCallsToPostRoute';
import {setEditPostTrue} from '../actions/posts';
import { DELETE_LANGUAGE } from './utils'


export class PostButtons extends React.Component {
    constructor(props) {
        super(props)

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    };

    handleDeleteClick(e) {
        e.preventDefault();
        const{ postId, username } = this.props.currentPost;

        this.props.dispatch(deletePost(postId, username));
        alert(DELETE_LANGUAGE);
        this.props.history.push('/');
    };

    handleEditClick(e) {
        e.preventDefault();

        const postId = this.props.match.params.postId;
        this.refs.btn.setAttribute("disabled", "disabled");;

        this.props.dispatch(setEditPostTrue());
        this.props.history.push(`/edit/${postId}`);
    };

    render() {
        return (
            <div className='post-buttons'>
                <button onClick={this.handleEditClick}
                        ref='btn'
                        className='oval-button post-button edit'>
                        <span className='edit-long-text'>Edit</span>
                        <span className='edit-short-text'>E</span>
                </button>
                <button onClick={this.handleDeleteClick}
                        className='oval-button post-button delete'>
                        <span className='delete-long-text'>Delete</span>
                        <span className='delete-short-text'>D</span>
                </button>
            </div>
        );
    };
};

const mapStateToProps = state => {

    const { currentPost } = state.postData;

    return  {
        currentPost
    };
};

export default connect(mapStateToProps)(PostButtons);
