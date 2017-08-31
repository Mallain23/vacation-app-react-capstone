import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deletePost} from '../actions/ajaxCallsToPostRoute'
import {setEditPostTrue} from '../actions/posts'

export class Post extends React.Component {
    constructor (props) {
        super(props)

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
    };

    renderAdditionalButtons() {
        const { allowEdit } = this.props
        if (allowEdit) {
          //please format the button as follows:
          //and please use constants instead of strings. maybe ButtonTypes.EDIT ButtonTypes.DELETE
            return (
                <span>
                    <button ref='btn'
                        onClick={this.handleEditClick}
                        disabled={false}
                        className='oval-button'>
                        Edit
                    </button>
                    <a className='oval-button' onClick={this.handleDeleteClick} > Delete </a>
                </span>
            )
        }
    };

    handleDeleteClick(e) {
        e.preventDefault()
        const{ postId, username } = this.props

        this.props.dispatch(deletePost(postId, username))
    };

    handleEditClick(e) {
        e.preventDefault()
        const { postId } = this.props
        this.refs.btn.setAttribute("disabled", "disabled");

        this.props.dispatch(setEditPostTrue())
        this.props.history.push(`/edit/${postId}`)
    };

    render() {
        const { title, profileId, destination, postId, username } = this.props

        return (
            <article className='box'>
                <div className='inner-box'>
                    <hr/>
                    <h1 className='post-heading'>{title}</h1>
                    <p className='font-accent'>by  <Link to={`/profile/${profileId}`}>{username}</Link></p>
                    <p className='post-destination'>{destination}</p>
                    <div className='box-bottom'>
                        <Link to={`/post/${postId}`} className='oval-button'>Read</Link>
                        {this.renderAdditionalButtons()}
                    </div>
                </div>
            </article>
        );
    };
};

const mapStateToProps = state => {
    const { editPost } = state.profile

    return {
        currentUser: state.auth.currentUser,
        editPost
    };
};

export default connect(mapStateToProps)(Post)
