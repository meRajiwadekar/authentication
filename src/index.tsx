import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Nopage from './components/UI/Nopage';
import RegisterPage from './pages/RegisterPage';


const router = createBrowserRouter([
  {
    path: '*',
    element: <Nopage />
  },
  {
    path: '/',
    element: <App />
  },
  {
    path: '/sign-up',
    element: <RegisterPage />
  },
  {
    path: '/auth/sign-in',
    element: <LoginPage />
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
