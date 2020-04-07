import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

let NAV_BUTTONS = [
  { value: '+ Add',
    operation: 'add'
  },
  { value: '- Subtract',
    operation: 'subtract'
  },
  { value: 'x Multiply',
    operation: 'multiply'
  },
  { value: '/ Divide',
    operation: 'divide'
  }
];

ReactDOM.render(
  <App navButtons={NAV_BUTTONS} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
