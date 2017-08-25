import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

import LargePost from './LargePost'
import Aside from './Aside'

export class ViewPost extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return(
            <div className='container'>
                <div className='row main'>
                    <div className='col-xs-12 col-lg-8'>
                        <div className='card-inner'>
                            <div className='box'>

                                    <LargePost {...this.props} />
                            </div>
                        </div>
                    </div>
                    <Aside {...this.props}/>
                </div>
            </div>
        )
    }
}



export default connect()(ViewPost)
