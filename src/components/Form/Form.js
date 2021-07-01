import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts.js'

function Form() {
  const initialPost = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  }

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });

  const [creator, setCreator] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [tags, setTags] = useState('');
  const [selectedFiles, setSelectedFiles] = useState('');


  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log('handoleSubmitです');
    e.preventDefault();
    console.log(postData)
    // dispatch(createPost(postData))
  }

  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">
          投稿フォーム
        </Typography>
        {/* <TextField type='text' name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => console.log(e.target.value)} />
        <TextField type="text" name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.tartget.value })} />
        <TextField type="text" name="message" variant="outlined" label="Messsage" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.tartget.value })} />
        <TextField type="text" name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.tartget.value })} /> */}

        <TextField type='text' name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setCreator(e.target.value)} />
        <TextField type="text" name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setTitle(e.target.value)} />
        <TextField type="text" name="message" variant="outlined" label="Messsage" fullWidth value={postData.message} onChange={(e) => setMessage(e.target.value)} />
        <TextField type="text" name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setTags(e.tartget.value)} />

        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setSelectedFiles(base64)}
          />
        </div>

        <Button type="submit">送信</Button>
      </form>
    </div>
  )
}

export default Form