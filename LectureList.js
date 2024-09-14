const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  name: String,
  videoUrl: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Lecture', lectureSchema);
