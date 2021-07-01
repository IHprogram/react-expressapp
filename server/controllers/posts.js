import PostMessage from '../models/postMessage.js';

// reqはHTTPリクエストを表すオブジェクト
// resはreqに対するHTTPレスポンスを構成するためのオブジェクト
// nextは勉強中。「next()」と記述することで次のミドルウェア関数を呼び出す？
export const getPosts = async (req, res, next) => {
  try {
    console.log(PostMessage)
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
  res.send('トップページのルーティングができました！');
}

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    // 201と言うHTTPステータスコードは「リクエストが成功し、リソースが成功した」と言う意味。
    res.status(201).json(newPost);
  } catch (error) {
    // 409と言うHTTPステータスコードは、リクエストが現在のサーバーの状態と競合したことを示す
    res.status(409).json({ message: error.message })
  }

  res.send('postsのpostです！')
}