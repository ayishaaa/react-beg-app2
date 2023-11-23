import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { default as App } from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home';
import Blogs from './components/blogs';
import Contact from './components/contact';
import Register from './components/register';
import NoPage from './components/nopage';
import Order from './components/order';
import NoteState from './context/notes/NoteState';

function App2() {
  return (
    <BrowserRouter>
    <NoteState>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="register" element={<Register />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
      </NoteState>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

reportWebVitals();
