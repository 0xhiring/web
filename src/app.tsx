import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRouter from './app-router';
import { persistor, store } from './reducers';
import { appTheme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
