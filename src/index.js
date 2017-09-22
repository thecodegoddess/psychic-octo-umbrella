import React from 'react';
import ReactDOM from 'react-dom';
import { APP } from './defaultState';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title={ APP.TITLE } subTitle={ APP.SUB_TITLE }  />, document.getElementById('root'));
registerServiceWorker();
