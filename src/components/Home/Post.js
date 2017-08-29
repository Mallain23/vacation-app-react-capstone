import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deletePost} from '../actions/protected-data'
import {toggleEditPost} from '../actions/profile'

export class Post extends React.Component {
    constructor (props) {
        super(props)

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
    }

    renderAdditionalButtons() {

        if (this.props.allowEdit) {
            let { postId } = this.props

            return (
                <span>
                    <button ref='btn' onClick={this.handleEditClick} disabled={false} className='oval-button'> Edit</button>
                    <a className='oval-button' onClick={this.handleDeleteClick} > Delete </a>
                </span>
            )
        }
    };

    handleDeleteClick(e) {
        e.preventDefault()
        let { postId, username } = this.props

        this.props.dispatch(deletePost(postId, username))
    }

    handleEditClick(e) {
        e.preventDefault()
        let { postId } = this.props
        this.refs.btn.setAttribute("disabled", "disabled");

        this.props.dispatch(toggleEditPost())
        this.props.history.push(`/edit/${postId}`)
    }

    render() {
        const { title, profileId, name, destination, postId } = this.props

        console.log(this.props)

        return (
            <article className='box'>
                <div className='inner-box'>
                    <hr/>
                    <h1 className='post-heading'>{title}</h1>
                    <p className='font-accent'>by  <Link to={`/profile/${profileId}`}>{name}</Link></p>
                    <p className='post-destination'>{destination}</p>
                    <div className='box-bottom'>
                        <Link to={`/post/${postId}`} className='oval-button'>Read</Link>
                        {this.renderAdditionalButtons()}
                    </div>
                </div>
            </article>
        )
    }
}

const mapStateToProps = state => {
    const { username } = state.auth.currentUser

    return {
        username,
        editPost: state.profile.editPost
    };
};

export default connect(mapStateToProps)(Post)
