import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lecture from './Lecture';

const LectureList = () => {
  const [lectures, setLectures] = useState([]);
  const [comments, setComments] = useState({});

  useEffect(() => {
    axios.get('/api/lectures')
      .then(response => {
        setLectures(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleComment = (lectureId, commentText) => {
    axios.post(`/api/comments/${lectureId}`, { commentText })
      .then(response => {
        setComments({ ...comments, [lectureId]: [...comments[lectureId], response.data] });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Lecture List</h1>
      <ul>
        {lectures.map((lecture) => (
          <li key={lecture.id}>
            <Lecture lecture={lecture} handleComment={handleComment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LectureList;
