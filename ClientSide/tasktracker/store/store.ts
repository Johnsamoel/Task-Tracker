import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice';

const reducers={
userAuthentication:authSlice
}

const store = configureStore({ reducer: reducers })
export default store;