import { configureStore } from '@reduxjs/toolkit';
import employeReducer from '../reducer/employeReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, employeReducer);

const store = configureStore({
  reducer: {
    employes: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
