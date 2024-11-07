import React, { useState, useEffect } from 'react';
import SearchBar from '../Componets/Searchbar';
import BookList from '../Componets/BooksList';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [defaultBooks, setDefaultBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Fetch default books on initial load
  useEffect(() => {
    fetchDefaultBooks();
  }, []);

  const fetchDefaultBooks = async () => {
    try {
      const response = await fetch('https://openlibrary.org/search.json?q=bestseller'); // Replace with any default book list
      if (!response.ok) throw new Error('Failed to fetch default books');
      const data = await response.json();
      setDefaultBooks(data.docs || []);
      setBooks(data.docs || []); // Show default books initially
    } catch (err) {
      setError(err.message);
    }
  };

  const searchBooks = async (query) => {
    setError(null);
    setIsSearching(true); // Flag to indicate user is searching
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      if (!response.ok) throw new Error('Failed to fetch search results');
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError(err.message);
      setBooks([]); // Clear books if search fails
    }
  };

  return (
    <div className="home">
      <h1>Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      {error && <p className="error-message">{error}</p>}
      {/* Show default books if no search has been performed, otherwise show search results */}
      <BookList books={isSearching ? books : defaultBooks} />
    </div>
  );
};

export default Home;
