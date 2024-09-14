const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/virtual-classroom', { useNewUrlParser: true, useUnifiedTopology: true });

const Lecture = require('./models/Lecture');
const Comment = require('./models/Comment');

app.use(cors());
app.use(express.json());

app.get('/api/lectures', async (req, res) => {
  const lectures = await Lecture.find().populate('comments');
  res.json(lectures);
});

app.post('/api/comments/:lectureId', async (req, res) => {
  const lectureId = req.params.lectureId;
  const commentText = req.body.commentText;
  const comment = new Comment({ lectureId, commentText });
  await comment.save();
  res.json(comment);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
