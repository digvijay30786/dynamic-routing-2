import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,} from "react-router-dom";
import AuthContext from './components/context';
ReactDOM.render(
  <AuthContext>
     <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </Router>
    </AuthContext>,
  document.getElementById('root')
);
