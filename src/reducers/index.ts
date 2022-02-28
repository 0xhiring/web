import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user.reducer';

function createReducer() {
  const persistConfig = {
    key: '0xhiring',
    storage,
    blacklist: [],
  };

  const rootReducer = combineReducers({
    user: userReducer.reducer,
  });

  const reducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
}

export const actions = {
  user: userReducer.actions,
} as const;

export const selectors = {
  user: userReducer.selectors,
} as const;

export const { store, persistor } = createReducer();
