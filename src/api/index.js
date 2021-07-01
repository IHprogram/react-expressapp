import axios from 'axios';

const url = 'http://localhost:5000/posts';

// axiosを使って、投稿内容を取得
export const fetchPosts = () => axios.get(url);
// データベースへの保存を行う
export const createPost = (newPost) => axios.post(url, newPost);