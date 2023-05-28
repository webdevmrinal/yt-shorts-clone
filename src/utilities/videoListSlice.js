import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
  name: "videoList",
  initialState: {
    items: [],
  },
  reducers: {
    updateList: (state, action) => {
      state.items = [...action.payload];
    },
  },
});

export default videoListSlice.reducer;
export const { updateList } = videoListSlice.actions;
