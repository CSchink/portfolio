import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {ThroughProvider} from 'react-through'
import ScrollToTop from '../src/components/scrolltop'

import "./pages/resume-styles.scss";


ReactDOM.render(
  <ThroughProvider>
    <BrowserRouter>
    <ScrollToTop>
    <App />
    </ScrollToTop>
    </BrowserRouter>
  </ThroughProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
