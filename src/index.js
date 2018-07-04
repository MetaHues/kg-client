import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// components
import App from './component/App';

// global style
import 'font-awesome/css/font-awesome.min.css'
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
