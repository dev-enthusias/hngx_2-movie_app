import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, { loader as homeLoader } from './pages/Home';
import Details from './pages/Details';
import Error from './pages/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: homeLoader,
    errorElement: <Error />,
  },
  {
    path: '/movie/details',
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
