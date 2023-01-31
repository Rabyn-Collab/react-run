import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  toggle: false,
  query: 'hollywood'
};



const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    change: (state, action) => {
      state.toggle = !state.toggle
    },
    changeQuery: (state, action) => {
      state.query = action.payload;
    }
  }
});

export const { change, changeQuery } = menuSlice.actions;
export default menuSlice;
