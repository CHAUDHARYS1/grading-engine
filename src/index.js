// react template   
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter } from 'react-router-dom';
import App from './App';
import { Router } from 'express';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);