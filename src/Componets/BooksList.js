import React from 'react';
import BookCard from './BooksCard';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => <BookCard key={book.key} book={book} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookList;
