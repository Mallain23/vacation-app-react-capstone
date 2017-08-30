import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, increaseSliceIndex, decreaseSliceIndex } from '../actions/protected-data';

export class Pagination extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this)
        this.handlePrevClick = this.handlePrevClick.bind(this)
    }

    handleNextClick() {
        this.props.dispatch(fetchPosts(this.props.sliceIndex + 1))
        .then(() => this.props.dispatch(increaseSliceIndex()))

    };

    handlePrevClick() {
      let { sliceIndex } = this.props
      console.log(sliceIndex)
      this.props.dispatch(fetchPosts(sliceIndex - 1))
      .then(() => this.props.dispatch(decreaseSliceIndex()))
    }

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
        )
    }
}

const mapStateToProps = state => ({

    sliceIndex: state.protectedData.sliceIndex
})

export default connect(mapStateToProps)(Pagination)
