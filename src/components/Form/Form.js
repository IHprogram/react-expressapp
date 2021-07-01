import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'

function Form() {
  const handleSubmit = () => {
    console.log('handoleSubmitです');
  }

  const initialPost = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  }

  const [postData, setPostData] = useState(initialPost);
  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">
          投稿フォーム
        </Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.tartget.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.tartget.value })} />
        <TextField name="message" variant="outlined" label="Messsage" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.tartget.value })} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.tartget.value })} />

        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        <Button>送信</Button>
      </form>
    </div>
  )
}

export default Form