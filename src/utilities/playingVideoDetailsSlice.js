import { createSlice } from "@reduxjs/toolkit";

const playingVideoDetailsSlice = createSlice({
    name:"playingVideo",
    initialState: {
        items:[]
    },
    reducers:{
      updateItem: (state, action)=>{
        state.items[0] = action.payload
      }  
    }
})

export default playingVideoDetailsSlice.reducer;
export const {updateItem} = playingVideoDetailsSlice.actions