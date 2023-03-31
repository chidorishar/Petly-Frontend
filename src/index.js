import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistedStore, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import './i18n';

import { allThemes } from 'utils/theme';
import { setToLS } from 'utils/storage/localStorage';

import './index.css';
import { Loader } from 'components/common';
import { App } from 'components/App';

setToLS('all-themes', allThemes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename="/Petly-Frontend">
        <ThemeProvider theme={allThemes.light}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
              <App />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
