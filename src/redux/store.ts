import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userListReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
  usersList: userListReducer,
  counter: counterReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;