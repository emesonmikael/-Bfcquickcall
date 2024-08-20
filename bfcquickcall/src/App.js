import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HomePage from './homepage';
import SecondPage from './SecondPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'home' ? (
        <HomePage onNavigate={() => handlePageChange('second')} />
      ) : (
        <SecondPage onNavigate={() => handlePageChange('home')} />
      )}
    </div>
  );
}

export default App;