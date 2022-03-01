import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AppRoutes from './app-routes';
import { persistor, store } from './reducers';
import theme from './themes';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={persistor}>
          <Router>
            <AppRoutes />
          </Router>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
