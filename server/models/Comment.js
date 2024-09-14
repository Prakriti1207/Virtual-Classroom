const mongoose = require('mongoose');
const db = require('./db');

const commentSchema = new mongoose.Schema({
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' },
  commentText: String
});

module.exports = db.model('Comment', commentSchema);
