import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRouter from './app-router';
import { persistor, store } from './reducers';
import theme from './themes';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
