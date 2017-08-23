import * as actions from '../components/actions/app';

const initialState = {
  auth: {
          currentUser: 'mallain',
          profileId: 1010
        },
  showLogin: false,
  posts: [{
        name: 'michael',
        username: 'mallain',
        content: 'test',
        profileId: 1010,
        heading: 'test',
        postId: 1

  }, {
        name: 'michael',
        username: 'test',
        content: 'test',
        profileId: 4565,
        heading: 'test',
        postId: 2

  }, {
        name: 'michael',
        username: 'test',
        content: 'test',
        profileId: 4565,
        heading: 'test',
        postId: 3

  }, {
        name: 'michael',
        username: 'test',
        content: 'test',
        profileId: 4565,
        heading: 'test',
        postId: 4

  },
  {     heading: 'Hawaii Adventure',
        username: 'mallain',
        postId: 23,
        content: "New Adventure",
        profileId: 1010,
        name: 'michael'
  },
  {     heading: 'Big Island Hawaii',
        username: 'mallain',
        postId: 22,
        content: "Hawaiiiiii",
        profileId: 1010,
        name: 'michael'
  }
],
  users: [{username: 'mallain',
          profileId: 1010,
          bio: 'text bio',
          avatar: 'https://s.gravatar.com/avatar/5288fd54b73883174c667302fab69c31?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png'
          // posts: [{  name: 'michael',
          //           username: 'test',
          //           content: 'test',
          //           profileId: 4565,
          //           heading: 'test',
          //           postId: 3
          // },
          // {      name: 'michael',
          //       username: 'test',
          //       content: 'test',
          //       profileId: 4565,
          //       heading: 'test',
          //       postId: 4
          // }]
        },

        {username: 'test',
                profileId: 1010,
                bio: 'text bio',
                avatar: 'https://s.gravatar.com/avatar/5288fd54b73883174c667302fab69c31?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png'
                // posts: [{     heading: 'HAwaiin Isalnds',
                //       postId: 22,
                //       content: "Hawaiiiiii",
                //       profileId: 1010,
                //       name: 'michael'
                // }, {  heading: 'Hawaii Adventure',
                //       postId: 23,
                //       content: "New Adventure",
                //       profileId: 1010,
                //       name: 'michael'
                // }]
              }

      ],
relatedPosts: [{postId: 22,
                heading: 'Big Island Hawaii'
              },
            {postId: 23,
            heading: 'Hawaii Adventure'
          }]
}

export default (state=initialState, action) => {
  if (action.type === actions.TOGGLE_LOGIN) {
      console.log(state)
      return Object.assign({}, state, {
        showLogin: !state.showLogin,
      });
  }
  return state
}
