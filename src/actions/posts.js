import * as api from '../api/index.js'

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

// redux-thunkを利用した非同期通信
export const getPostsAction = (data) => {
  return (
    {
      type: FETCH_POSTS,
      payload: data
    }
  )
}

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    console.log(response)
    const { data } = await api.fetchPosts();
    console.log(data)
    // 取得してきたデータをgetPostsActionに渡し、プレーンなオブジェクトを返す
    dispatch(getPostsAction(data))
  } catch (error) {
    console.log(error.message);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE_POST, payload: data })
  } catch (error) {
    console.log(error);
  }
}