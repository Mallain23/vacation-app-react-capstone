import React from 'react';

import Post from '../Home/Post';

export const getAvatarString = (firstName, lastName) => {
    const firstLetter = firstName.split('').splice(0, 1).join('');
    const secondLetter = lastName.split('').splice(0,1).join('');

    return `${firstLetter}${secondLetter}`
};
;
export const postLanguage = 'User has not added any posts to Vacay Away yet!';
export const favoritesLanguage = 'User has not added any posts to their favorites yet!';

export const sliceIndex = 0;

export const amount = 8;

export const POST = 'POST';

export const formatPosts = (posts, props, language) => {
    let userPosts

    if (!posts.length < 1) {

        return userPosts = posts.map(({ title, destination, postId, username, profileId, name }, index) => {
            return <div key={index}  className='col-xs-12 col-sm6 col-md-3'>
                  <div className='post-box' key={index}>
                      <Post
                            key={index} postId={postId}
                            {...props}
                            username={username}
                            profileId={profileId}
                            title={title}
                            destination={destination}
                            name={name} />
                  </div>
              </div>
        });
    }

    return userPosts = <p className='no-posts'>{language}</p>
};
