// App.js

import React from 'react';
import UserAuthPage from './UserLogin/userAuth';
import './App.css'; // Import a separate CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <UserAuthPage />
    </div>
  );
};

export default App;
