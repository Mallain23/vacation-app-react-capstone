import React from 'react'

import './map.css'

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div className='map'> <Map google={this.props.google} /></div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyDkLBer9Z9PFI5MpwsNeuIt8cuKnlxcjuc'
})(Container)
