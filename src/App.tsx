import React from 'react';
import './assets/styles/global.css';

import RegisterPage from './pages/RegisterPage';
import Login from './components/Auth/Login';

function App() {
  return (
    <div>
      {/* <RegisterPage /> */}
      <Login />
    </div>
  );
}

export default App;
