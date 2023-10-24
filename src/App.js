import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import lazyLoad from './Router/LazyLoad';
import Login from './Pages/Login';
import BookList  from './Pages/BookList';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ErrorBoundary>{lazyLoad(Login)}</ErrorBoundary>} />
          <Route path="/books" element={<ErrorBoundary>{lazyLoad(BookList)}</ErrorBoundary>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
