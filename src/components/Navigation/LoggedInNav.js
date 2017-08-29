// import React from 'react'
// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// 
// import {toggleEditProfile, setEditPostToFalse, setEditProfileToFalse } from '../actions/profile'
//
// import DropdownLink from './DropdownLink'
// import NavInput from './NavInput'
//
//
// export class LoggedInNav extends React.Component {
//     constructor (props) {
//         super(props)
//
//         this.handleCreatePostClick = this.handleCreatePostClick.bind(this)
//         this.handleEditProfileClick = this.handleEditProfileClick.bind(this)
//     };
//
//     handleEditProfileClick (e) {
//       e.preventDefault()
//       const {profileId} = this.props.currentUser
//
//       this.props.dispatch(toggleEditProfile())
//       this.props.dispatch(setEditPostToFalse());
//
//       this.props.history.push(`../profile/${profileId}`)
//     };
//
//     handleCreatePostClick (e) {
//       e.preventDefault()
//       this.props.dispatch(setEditPostToFalse());
//       this.props.dispatch(setEditProfileToFalse());
//
//       this.props.history.push(`../create-post`)
//     };
//
//     render() {
//         return (
//              <span>
//                  <div className='col-xs-12 col-md-2'>
//                      <div className='box-navigation'>
//                          <div className='dropdown'>
//                              <a href="javascript:void(0)" className="dropbtn nav-links">Sort Posts</a>
//                              <div className="dropdown-items">
//                                  <DropdownLink value='Most Recent'id='most-recent'/>
//                                  <DropdownLink value='Most Visited Destinations'id='most-visited'/>
//                                  <DropdownLink value='Highest Rated Destinations'id='highest-rated'/>
//                              </div>
//                          </div>
//                      </div>
//                  </div>
//                  <div className='col-xs-12 col-md-5'>
//                          <NavInput {...this.props}/>
//                  </div>
//                  <div className='col-xs-12 col-md-3'>
//                     <div className='dropdown'>
//                         <a href="javascript:void(0)" className="dropbtn nav-links">{this.props.currentUser.username}</a>
//                         <div className="dropdown-items">
//                             <a className='nav-links' onClick={this.handleEditProfileClick} id='edit-profile'> Edit Profile</a>
//                             <a className='log-out' onClick={this.handleLogOutClick} id='log-out'>Log Out</a>
//                         </div>
//                     </div>
//                     <a onClick={this.handleCreatePostClick} className='round-button'> + </a>
//                 </div>
//              </span>
//         )
//     };
// };
//
//
// const mapStateToProps = state => {
//     let { currentUser } = state.auth
//
//     return {
//         loggedIn: currentUser !== null,
//         currentUser: currentUser
//     };
// };
//
//   export default connect(mapStateToProps)(LoggedInNav)
