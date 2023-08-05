import { createSlice } from '@reduxjs/toolkit';

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState: { joinOurProgramVisible: true },
  reducers: {
    setVisibility: (state, action) => {
      state.joinOurProgramVisible = action.payload
    },
  },
});

export const { setVisibility } = visibilitySlice.actions;

export default visibilitySlice.reducer;