import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import mongoURI from './default.js'

import postRoutes from './routes/posts.js';

const app = express();

// routes/posts.jsのルーティング処理用オブジェクトとの紐付け
app.use('/posts', postRoutes)

// limitは、リクエストの最大容量を制限するためのオプション。デフォルトは100kbだが、今回は30mbに指定
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// CORSのミドルウェアを使用し、全てのAPIをCORS許可する。これをせずにブラウザからアクセスすると、エラーになる可能性がある。
app.use(cors());

// console.log(mongoURI)
// MongoDB Atlasと接続するための定数を設定
const CONNECTION_URL = mongoURI;

// Node.jsの環境変数はprocess.envと言うオブジェクトに格納される。
// 以下は、環境変PORTにある値(Herokuなどで設定されているもの)が入る。もしPORTが存在しなければ、5000というポート番号となる。
const PORT = process.env.PORT || 5000;


// mongoose.connect()でMongoDBへ接続できる。また、Promiseを返すのでthenとcatchを使用する
mongoose.connect(CONNECTION_URL, { useNewParser: true, useUnifiedTopology: true })
  // app.listen(ポート番号, 実行したい処理)で、ポートを指定し、処理を行う
  .then(() => app.listen(PORT, () => {
    console.log(`成功です。ポート番号: ${PORT}`)
  }))
  .catch((err) => console.log(`エラー発生です: ${err.message}`));

// mongoose.set()で、mongooseのオプションを設定できる。
// 以下は、useFindAndModifyをfalseに設定
mongoose.set('useFindAndModify', false)