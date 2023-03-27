import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import { theme } from 'utils/theme';

import { persistedStore, store } from 'redux/store';

import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter basename="/Petly-Frontend">
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
              <App />
            </PersistGate>
          </Provider>
        </ThemeProvider>{' '}
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
