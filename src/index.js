import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios'

// components
import App from './component/App';

// global style
import 'font-awesome/css/font-awesome.min.css'
import './css/index.css';

// axios setup
Axios.defaults.baseURL = 'https://metahues-kg-api.herokuapp.com'
if(process.env.API_URL !== undefined) Axios.defaults.baseURL = process.env.API_URL
console.log(`Setting API_URI = ${Axios.defaults.baseURL}`)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
