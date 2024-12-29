import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux';

const store = createStore(rootReducer);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
