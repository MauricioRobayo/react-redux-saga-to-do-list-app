import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './store';

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<div>Loading...</div>}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
