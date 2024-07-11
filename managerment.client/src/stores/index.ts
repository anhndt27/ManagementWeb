import { configureStore, ThunkDispatch, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import rootReducer from './reducers';
import { AuthState } from './reducers/auth.reducer';
import { CommonState } from './reducers/common.reducer';
import { TableState } from './reducers/table.reducer';

export interface RootState {
  auth: AuthState;
  common: CommonState;
  table: TableState;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = ThunkDispatch<RootState, void, Action>;
