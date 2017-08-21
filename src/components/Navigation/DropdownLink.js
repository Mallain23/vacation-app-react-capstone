import React from 'react'

export default class DropdownLink extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
      e.preventDefault()
      //action
    }
    render() {
        return (
            <a onClick={this.handleClick} className='drop-down-button nav-links' id={this.props.id} value={this.props.value}>{this.props.value}</a>
        )
    }
}
