import { configureStore } from "@reduxjs/toolkit";
import videoListSlice from "./videoListSlice";
import playingVideoDetailsSlice from "./playingVideoDetailsSlice";

const store = configureStore({
  reducer: {
    videos: videoListSlice,
    playingVideo: playingVideoDetailsSlice,
  },
});
export default store;
