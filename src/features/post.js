import { createSlice } from "@reduxjs/toolkit";
import { crudLocal, getPostFromLocal } from "./localstorage";



const initialState = {
  posts: getPostFromLocal(),
  toggle: false
};


const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    postadd: (state, action) => {
      state.posts.push(action.payload);
      crudLocal(state.posts);
    },
    removePost: (state, action) => {
      state.posts.splice(action.payload, 1);
      crudLocal(state.posts);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) => {
        return post.id === action.payload.id ? action.payload : post
      });
      crudLocal(state.posts);
    },
    change: (state, action) => {
      state.toggle = !state.toggle;
    }
  }
});


export const { postadd, removePost, updatePost, change } = postSlice.actions;

export default postSlice.reducer;