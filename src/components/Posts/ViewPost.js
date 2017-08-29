import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import LargePost from './LargePost'
import Aside from './Aside'

export function ViewPost (props) {

    if (!props.isLoggedIn) {
        return <Redirect to={'/'} />
    }

    return (
        <div className='container'>
            <div className='row main'>
                <div className='col-xs-12 col-lg-8'>
                    <div className='card-inner'>
                        <div className='box'>
                           <LargePost {...props}/>
                        </div>
                    </div>
                </div>
                <Aside {...props} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(ViewPost)
