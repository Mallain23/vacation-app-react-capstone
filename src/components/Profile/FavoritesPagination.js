import React from 'react'
import {connect} from 'react-redux'
import { getFavoritePosts } from '../actions/profile';


export class FavoritesPagination extends React.Component {
    constructor(props) {
        super(props)

        this.handleNextClick = this.handleNextClick.bind(this)
        this.handlePrevClick = this.handlePrevClick.bind(this)
    }

    handleNextClick() {
        const { favoritePostSliceIndex} = this.props
        const newSliceIndex = favoritePostSliceIndex + 1

        this.props.dispatch(getFavoritePosts(favoritePostSliceIndex, newSliceIndex));
    };

    handlePrevClick() {
        const { favoritePostSliceIndex} = this.props
        const newSliceIndex = favoritePostSliceIndex - 1

        this.props.dispatch(getFavoritePosts(favoritePostSliceIndex, newSliceIndex));
  };

    render() {
        const  { favoritePostSliceIndex, finalPostIndicator } = this.props;
        const pageNumber = favoritePostSliceIndex
        const prevDisable = pageNumber === 1 ? true : false;
        const nextDisable = finalPostIndicator ? true : false;

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

    const { finalPostIndicator, favoritePostSliceIndex } = state.profile
    return {
        finalPostIndicator,
        favoritePostSliceIndex
    };
};

export default connect(mapStateToProps)(FavoritesPagination)
