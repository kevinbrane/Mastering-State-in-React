import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import subscriptionReducer from './subscriptionSlice';
import visibilityReducer from './visibilitySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    subscription: subscriptionReducer,
    visibility: visibilityReducer,
  }
});

export default store;