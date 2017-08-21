import React from 'react'

export default class NavInput extends React.Component {
    constructor(props) {

          super(props)

          this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        //action
    }
    render() {
        return (
            <input type='text' id='search' placeholder='search for the perfect vacation...' onSubmit={this.handleSubmit} />
        )
    }
}
