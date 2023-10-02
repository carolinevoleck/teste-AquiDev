import React from 'react';
import { Login } from './Components/login'
import { Dashboard } from './Components/dashboard'
import { Link, Route } from 'react-router-dom';
import './Styles/global.css'

function App() {
  return (
    <>
      <Route exact path="/" component={<Login />} />
      <Route exact path="/dashboard" component={<Dashboard />} />
    </>
  );
}

export default App;
