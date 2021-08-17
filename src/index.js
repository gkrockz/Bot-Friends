import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from  './Container/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div> <App /> </div>  
  </React.StrictMode>, document.getElementById('root')
);


reportWebVitals();
