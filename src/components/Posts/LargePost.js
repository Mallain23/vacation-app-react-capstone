import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import {fetchSelectedPost, fetchSelectedUser} from '../actions/protected-data'

export class LargePost extends React.Component {

    componentWillMount() {
        let postId = this.props.match.params.postId

        this.props.dispatch(fetchSelectedPost(postId))

        .then(postObj => {
            this.props.dispatch(fetchSelectedUser(postObj.post.username))
        })
    }

    render() {

        const { title,
                profileId,
                destination,
                lodging,
                dining,
                sites,
                activities,
                advice,
                rating,
                name,
                avatar } = this.props

        return (
            <div className='row'>
                <div className='col-xs-12 col-md-3'>
                   <Link to={`/profiles/${profileId}`}>{avatar}</Link>
                </div>
                <div className='col-xs-12 col-md-9'>
                    <hr className='hr'/>
                    <h1 className='large-post-title'>{title}</h1>
                    <p className='font-accent'>by  <Link to={`/profile/${profileId}`}>{name}</Link></p>
                    <p className='large-post-destination'>Destination: {destination}</p>
                    <p className='large-post-lodging'>Lodgin: {lodging}</p>
                    <p className='large-post-dining'>Dining: {dining}</p>
                    <p className='large-post-sites'>Sites: {sites}</p>
                    <p className='large-post-activities'>Activities: {activities}</p>
                    <p className='large-post-advice'>Advice: {advice}</p>
                    <p className='large-post-rating'>Rating: {rating}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
  console.log(state.protectedData)
  return Object.assign({}, state.protectedData.currentPost, state.protectedData.viewUser)
}

export default connect(mapStateToProps)(LargePost)
