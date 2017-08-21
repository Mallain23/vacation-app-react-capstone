import React from 'react'
import CrearePostForm from './CreateCardForm'
export default class CreatePost extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-8'>
                        <div className='create-card'>
                            <CreatePostForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
