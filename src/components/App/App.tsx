import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css'
import StoriesPage from '../StoriesPage/StoriesPage';
import PostPage from '../PostPage/PostPage';
import { Route, Routes } from 'react-router-dom';
import AuthorPage from '../AuthorPage/AuthorPage';

function App() {
  return (
    <Routes>
      <Route index element={<StoriesPage />} />
      <Route path='StoriesPage' element={<StoriesPage />} />
      <Route path='PostPage' element={<PostPage />} />
      <Route path='AuthorPage' element={<AuthorPage />} />
    </Routes>
  );
}

export default App;
