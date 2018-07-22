import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

// rootReducer
import rootReducer from './reducer'

// components
import App from './component/App';

// global style
import 'font-awesome/css/font-awesome.min.css'
import './css/index.css';

const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
