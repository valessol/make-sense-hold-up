import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss'
import { AuthProvider } from './components/Context/AuthContext';
import { UserProvider } from './components/Context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

