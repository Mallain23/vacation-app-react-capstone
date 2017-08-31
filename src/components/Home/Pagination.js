import React from 'react'
import {connect} from 'react-redux'
// please indent as such
import {
    increaseSliceIndex,
    decreaseSliceIndex
} from '../actions/posts';
import { fetchPosts,
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

        //can we please try to leave switch functins like this out of the coponent and
        //into the action?

        //waht if it was something like this?
        //this.props.dispatch(getNextPageData(sliceIndex, searchType))

        //and searchType prop was something like SearchTypes.BASIC, SearchTypes.SEARCH_TERM, SearchTypes.USER_POSTS
        //then you could handle the increaseSliceIndex in the thunk
        //also looks like you could perhaps do this switch


        switch(searchFunction) {
          //since sliceIndex + 1 is used in all of them, please create a constant at the top.
            case fetchPosts:
                this.props.dispatch(searchFunction(sliceIndex + 1))
                  //please indent .then's
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
