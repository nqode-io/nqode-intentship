import React from 'react';
import CreateBookPage from 'pages/CreateBookPage';
import Login from 'pages/Login/Login';
import AdminBooksPage from 'pages/AdminBooksPage';
import ProfilePage from 'pages/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserBookPage from 'pages/User/UserBookPage';
import BookDetailsPage from 'pages/BookDetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<AdminBooksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/book/:id" element={<UserBookPage />} />
        <Route path="/book/edit/:id" element={<BookDetailsPage />} />
        <Route path="/create-book" element={<CreateBookPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
