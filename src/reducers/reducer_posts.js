import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    //es5 syntax
    //const post = action.payload.data;
    // const newState = { ...state }
    // newState[post.id] = post;
    // return newState;

    //es6 syntax
    return { ...state, [action.payload.data.id]: action.payload.data };


    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
    return state;
  }
}
