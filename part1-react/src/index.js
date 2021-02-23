import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ComplexState } from './complexState'
import { Render } from './Render'


ReactDOM.render(
    <React.StrictMode>
      <Render/>
    </React.StrictMode>,
    document.getElementById('root')
  );



