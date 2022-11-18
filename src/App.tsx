import React from 'react';
import classes from 'App.module.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from 'pages/Login/Login';
import BooksOverview from 'pages/BooksOverview/BooksOverview';
import SingleBook from 'pages/SingleBook/SingleBook';
import Navbar from 'components/Navbar/Navbar';
import Dashboard from 'pages/Admin/Dashboard/Dashboard';
import Profile from 'pages/Profile/Profile';
import { RoleContext } from 'contexts/roleContext';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className={classes['c-app']}>
      {pathname !== '/' && <RoleContext.Consumer>{({ role }) => <Navbar />}</RoleContext.Consumer>}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booksoverview" element={<BooksOverview />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
