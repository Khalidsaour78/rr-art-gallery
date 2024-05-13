import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'
import { createRoot, Suspense } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);