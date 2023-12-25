import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Admin from './Pages/Admin.jsx';
import Cart from './Pages/Cart.jsx';

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // Replace this with your authentication logic
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter ([
  {
    path: "/",
    element: <PrivateRoute><App /></PrivateRoute>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/admin",
    element: <PrivateRoute><Admin /></PrivateRoute>
  },
  {
    path: "/cart",
    element: <PrivateRoute><Cart /></PrivateRoute>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
