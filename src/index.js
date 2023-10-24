import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {Provider} from 'react-redux';
import {reducer} from './Redux/reducer';
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
