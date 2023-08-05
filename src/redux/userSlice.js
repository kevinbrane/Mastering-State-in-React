import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
  initialState: '',
  reducers: {
    setUser: (_, action) => (action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;