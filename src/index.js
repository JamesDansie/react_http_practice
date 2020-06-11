import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// is is requests that have errors (internet off)
// the request is the config for the request
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit config, a good spot to put universal headers such as auth headers
    return request;
}, error => {
    // this allows use to universally log an error, then pass the error on to the child call.
    console.log(error);
    return Promise.reject(error);
});

// this is for responses that have errors (internet sends an error)
axios.interceptors.response.use(response => {
    console.log(response);
    // Edit config
    return response;
}, error => {
    // this allows use to universally log an error, then pass the error on to the child call.
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
