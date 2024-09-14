import React from 'react';

const Comment = ({ comment }) => {
  return (
    <li key={comment.id}>{comment.commentText}</li>
  );
};

export default Comment;
