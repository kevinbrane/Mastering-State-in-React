import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import data from '../mockData/db.json';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (email) => {
    const response = await fetch('http://localhost:3000/subscribe');
    const data = await response.json();
    return data.find(user => user.email === email);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: [ ...data.subscribe ],
  reducers: {
    addUser: (state, action) => {
      state = state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const email = action.payload;
      const index = state.indexOf(email);
      const newArray = state.splice(index, 1);
      state = newArray;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;