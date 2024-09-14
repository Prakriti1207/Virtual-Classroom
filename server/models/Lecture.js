const mongoose = require('mongoose');
const db = require('./db');

const lectureSchema = new mongoose.Schema({
  name: String,
  videoUrl: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = db.model('Lecture', lectureSchema);
