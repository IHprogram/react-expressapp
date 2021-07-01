import { FETCH_POSTS, CREATE_POST } from '../actions/posts';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('FETCH_POSTSです');
      // 取得したデータ(action.payload)をstateに格納し、返却
      return state
    case CREATE_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}