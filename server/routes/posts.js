// ルーティングを行うためのファイル
import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js'

// ルーティング用オブジェクトを作成。これがあると簡単にルーティングを実装できる。
const router = express.Router();

// トップページ(/)へのルーティングを定義(http://localhost:5000/postsでアクセスできる)
router.get('/', getPosts);
router.post('/', createPost)

export default router;