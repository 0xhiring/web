import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function createReducer() {
  const persistConfig = {
    key: '0xhiring',
    storage,
    blacklist: [],
  };

  const reducer = persistReducer(persistConfig, combineReducers({}));

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

export const actions = {} as const;

export const selectors = {} as const;

export const { store, persistor } = createReducer();
