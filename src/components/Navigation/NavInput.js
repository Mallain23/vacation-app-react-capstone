import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {browserHistory} from 'react-router'

import {resetSliceIndex, saveSearchTerm} from '../actions/posts'
import {searchForPosts} from '../actions/ajaxCallsToPostRoute'
import './Navigation.css'

export class NavInput extends React.Component {
    constructor(props) {
          super(props)

          this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleSubmit(e) {
        e.preventDefault()

        const sliceIndex = 0
        const numberOfResults = 20
        const searchTerm = this.input.value

        this.input.value = '';

        this.props.dispatch(saveSearchTerm(searchTerm));
        this.props.dispatch(resetSliceIndex());
        this.props.dispatch(searchForPosts(searchTerm, numberOfResults, sliceIndex))
        .then(() => this.props.history.push('../search'))
    };

    render() {
        return (
            <form className='post-search' onSubmit={this.handleSubmit} >
                <input type='text' id='search'   ref={input => (this.input = input)} placeholder='search for the perfect vacation...'  />
                <button className='hide'></button>
            </form>
        );
    };
};

export default connect()(NavInput)
