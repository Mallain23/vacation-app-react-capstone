import React from 'react'
import {connect} from 'react-redux'
import { increaseSliceIndex,
        decreaseSliceIndex } from '../actions/posts';
import {fetchPosts,
        searchForPosts,
        getUsersPosts } from '../actions/ajaxCallsToPostRoute'

export class Pagination extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this)
        this.handlePrevClick = this.handlePrevClick.bind(this)
    }

    handleNextClick() {
        const { sliceIndex, searchTerm, searchFunction } = this.props
        const username = this.props

        switch(searchFunction) {

            case fetchPosts:
                this.props.dispatch(searchFunction(sliceIndex + 1))
                .then(() => this.props.dispatch(increaseSliceIndex()))

                break;

            case searchForPosts:
                this.props.dispatch(searchFunction(searchTerm, 20, sliceIndex + 1))
                .then(() => this.props.dispatch(increaseSliceIndex()))

                break;

            case getUsersPosts:
                this.props.dispatch(searchFunction(username, sliceIndex + 1))
                .then(() => this.props.dispatch(increaseSliceIndex()))

                break;
        };
    };

    handlePrevClick() {
        const { sliceIndex, search, searchTerm, searchFunction } = this.props
        const username = this.props

        switch(searchFunction) {

            case fetchPosts:

                this.props.dispatch(searchFunction(sliceIndex - 1))
                .then(() => this.props.dispatch(decreaseSliceIndex()))

                break;

            case searchForPosts:
                this.props.dispatch(searchFunction(searchTerm, 20, sliceIndex - 1))
                .then(() => this.props.dispatch(decreaseSliceIndex()))

                break;

            case getUsersPosts:
                this.props.dispatch(searchFunction(username, sliceIndex - 1))
                .then(() => this.props.dispatch(decreaseSliceIndex()))

                break;
        };
  };

    render() {
        const  { sliceIndex } = this.props
        const pageNumber = sliceIndex + 1
        const disable = pageNumber === 1 ? true : false

        return (
            <div className='col-xs-12 col-md-3'>
                <button className='Prev' disabled={disable} ref='prev' onClick={this.handlePrevClick} > Previous Page </button>
                {pageNumber}
                <button className='Next' onClick={this.handleNextClick} > Next Page </button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { sliceIndex, searchTerm } = state.postData

    return {
        sliceIndex,
        searchTerm
    };
};

export default connect(mapStateToProps)(Pagination)
