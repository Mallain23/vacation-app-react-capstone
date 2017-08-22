import * as actions from '../components/actions/app';

const initialState = {
  auth: {
          currentUser: 'test'
        },
  showLogin: false,
  posts: [{
        name: 'michael',
        content: 'test',
        profileId: 1010,
        heading: 'test'

  }, {
        name: 'michael',
        content: 'test',
        profileId: 4565,
        heading: 'test'

  }, {
        name: 'michael',
        content: 'test',
        profileId: 4565,
        heading: 'test'

  }, {
        name: 'michael',
        content: 'test',
        profileId: 4565,
        heading: 'test'

  }],
  users: [{username: 'mallain23',
          profileId: 1010,
          bio: 'text bio',
          avatar: 'https://s.gravatar.com/avatar/5288fd54b73883174c667302fab69c31?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png'
        }]
};

export default (state=initialState, action) => {
  if (action.type === actions.TOGGLE_LOGIN) {
      console.log(state)
      return Object.assign({}, state, {
        showLogin: !state.showLogin,
      });
  }
  return state
}
