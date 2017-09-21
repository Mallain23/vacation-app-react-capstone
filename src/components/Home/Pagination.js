import React from 'react';
import {connect} from 'react-redux';

import { increaseSliceIndex, decreaseSliceIndex } from '../actions/posts';
import { fetchPosts, searchForPosts, getUsersPosts } from '../actions/ajaxCallsToPostRoute';

import './Home.css'

export class Pagination extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this)
        this.handlePrevClick = this.handlePrevClick.bind(this)
    }

    handleNextClick() {
        const { sliceIndex, searchTerm, searchFunction } = this.props
        const  { username } = this.props

        switch(searchFunction) {

            case fetchPosts:
                this.props.dispatch(searchFunction(sliceIndex + 1, 20))
                .then(() => this.props.dispatch(increaseSliceIndex()))

                break;

            case searchForPosts:
                this.props.dispatch(searchFunction(searchTerm, 20, sliceIndex + 1))
                .then(() => this.props.dispatch(increaseSliceIndex()))

                break;

            case getUsersPosts:
                this.props.dispatch(searchFunction(username, sliceIndex + 1, 8))
                .then(() => this.props.dispatch(increaseSliceIndex()))

                break;
        };
    };

    handlePrevClick() {
        const { sliceIndex, search, searchTerm, searchFunction } = this.props
        const { username } = this.props

        switch(searchFunction) {

            case fetchPosts:

                this.props.dispatch(searchFunction(sliceIndex - 1, 20))
                .then(() => this.props.dispatch(decreaseSliceIndex()))

                break;

            case searchForPosts:
                this.props.dispatch(searchFunction(searchTerm, 20, sliceIndex - 1))
                .then(() => this.props.dispatch(decreaseSliceIndex()))

                break;

            case getUsersPosts:
                this.props.dispatch(searchFunction(username, sliceIndex - 1, 8))
                .then(() => this.props.dispatch(decreaseSliceIndex()))

                break;
        };
  };

    render() {
        const  { sliceIndex, final } = this.props;
        const pageNumber = sliceIndex + 1;
        const prevDisable = pageNumber === 1 ? true : false;
        const nextDisable = final ? true : false;

        return (
            <div className='col-xs-12 pagination'>
                <div className='pagination-button-container'>
                    <button className='prev oval-button' disabled={prevDisable} ref='prev' onClick={this.handlePrevClick} >
                        <span className='prev-long'>Previous Page</span>
                        <span className='prev-short'>Prev</span>
                     </button>
                    <span className='page-num'>{pageNumber}</span>
                    <button className='next oval-button' disabled={nextDisable} onClick={this.handleNextClick} >
                        <span className='next-long'>Next Page</span>
                        <span className='next-short'> Next</span>
                    </button>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { sliceIndex, searchTerm, final } = state.postData

    return {
        sliceIndex,
        searchTerm,
        final
    };
};

export default connect(mapStateToProps)(Pagination)
