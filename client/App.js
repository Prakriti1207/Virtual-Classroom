import React from 'react';
import ReactDOM from 'react-dom';
import LectureList from './LectureList';
import eBookLibrary from './eBookLibrary';

function App() {
  return (
    <div>
      <h1>Virtual Classroom</h1>
      <LectureList />
      <eBookLibrary />
    </div>
  );
}

export default App;
