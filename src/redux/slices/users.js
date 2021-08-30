import {createSlice} from "@reduxjs/toolkit";
import {concat, remove} from "lodash";

const initialState = {
  collection: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: () => initialState,
    usersRequested: (state, action) => {
      state.loading = true
    },
    usersSucceeded: (state, action) => {
      state.collection = concat(state.collection, action.payload.articles)
      state.loading = false
    },
    usersFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    removeGradedCard: (state, action) => {
       const { screenID } = action.payload;
      // console.log(screenID, 'dsfds')
      remove(state.collection, { screenID: screenID });
    },
  },
});

export const {
  reset,
  usersRequested,
  usersSucceeded,
  usersFailed,
  removeGradedCard
} = slice.actions;

export default slice.reducer;
