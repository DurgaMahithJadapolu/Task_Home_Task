import React from 'react';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="book-card">
      <img src={coverUrl} alt={`${book.title} cover`} />
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p>First Published: {book.first_publish_year || 'N/A'}</p>
    </div>
  );
};

export default BookCard;
