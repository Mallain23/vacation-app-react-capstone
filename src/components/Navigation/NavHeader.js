import React from 'react'

import {resetSliceIndex} from '../actions/posts';

export default class NavHeader extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
  };

    handleClick() {
        this.props.dispatch(resetSliceIndex());
        this.props.history.push('/');
  };

    render() {
        const { col } = this.props;

        return (
            <div className={col}>
                    <h1 className='nav-app-title'>
                        <a className='title' onClick={this.handleClick}> Vacay Away</a>
                    </h1>
            </div>
        );
    };
};
