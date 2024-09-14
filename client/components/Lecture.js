import React from 'react';
import YouTube from 'react-youtube';

const Lecture = ({ lecture, handleComment }) => {
  return (
    <div>
      <h2>{lecture.name}</h2>
      <YouTube videoId={lecture.videoUrl} />
      <ul>
        {lecture.comments.map((comment) => (
          <li key={comment.id}>{comment.commentText}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a comment"
        value={commentText}
        onChange={(e) => handleComment(lecture.id, e.target.value)}
      />
    </div>
  );
};

export default Lecture;
