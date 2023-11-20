import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/user/userSlice.js';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
    user: userReducer
}) 

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

export const persisteReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persisteReducer,
    // customizing it to disable the serializability check for actions. 
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
          serializableCheck: false
  }),
})

export const persistor = persistStore(store)