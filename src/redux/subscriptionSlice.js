import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const subscribeUser = createAsyncThunk(
  'subscription/subscribeUser',
  async (email, { rejectWithValue }) => {
    try {

      const postData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      };
  
      const subscribeResponse = await fetch('http://localhost:3000/subscribe', postData);
  
      if (!subscribeResponse.ok) {
        throw new Error(subscribeResponse.statusText);
      }
  
      return { message: 'Subscription successful!' };
    } catch (error) {
      return rejectWithValue({ message: `${error.message}, error code: ${error.code}` });
    }
  }
);

export const unsubscribeUser = createAsyncThunk(
  'subscription/unsubscribeUser',
  async (_, { rejectWithValue }) => {
    try {
      const postData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      };

      const unsubscribeResponse = await fetch('http://localhost:3000/unsubscribe', postData);
      if (!unsubscribeResponse.ok) {
        throw new Error(unsubscribeResponse.statusText);
      }

      return { message: 'Unsubscription successful!' };
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: { status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(subscribeUser.fulfilled, (state) => {
        state.status = 'subscribed';
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(unsubscribeUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(unsubscribeUser.fulfilled, (state) => {
        state.status = 'unsubscribed';
      })
      .addCase(unsubscribeUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export default subscriptionSlice.reducer;