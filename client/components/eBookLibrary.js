import React from 'react';

const eBookLibrary = () => {
  const eBooks = [
    { title: 'Introduction to Programming', author: 'John Doe' },
    { title: 'Data Structures and Algorithms', author: 'Jane Doe' },
    { title: 'Web Development Fundamentals', author: 'Bob Smith' }
  ];

  return (
    <div>
      <h1>eBook Library</h1>
      <ul>
        {eBooks.map((eBook) => (
          <li key={eBook.title}>
            <a href={`https://example.com/ebooks/${eBook.title}.pdf`}>{eBook.title}</a>
            <p>by {eBook.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default eBookLibrary;
