const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' },
  commentText: String
});

module.exports = mongoose.model('Comment', commentSchema);
