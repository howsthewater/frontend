import React from 'react';
import logo from './logo.svg';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; 
import './App.css';

Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Future Home of Hows The Water.
        </p>
        <a
          className="App-link"
          href="https://github.com/orgs/howsthewater/dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hows the Water GITHUB
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);
