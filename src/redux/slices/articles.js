import {createSlice} from "@reduxjs/toolkit";
import {ceil} from "lodash";

const initialState = {
  collection: [],
  param: {
    page: 1,
    total: 1,
    query: null,
    per: 5
  },
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "aritcles",
  initialState,
  reducers: {
    reset: () => initialState,
    articlesRequested: (state, action) => {
      state.loading = true
    },
    articlesSucceeded: (state, action) => {
      state.collection = action.payload.articles.arr
      state.param.total = ceil(action.payload.articles.size / 5)
      state.loading = false
    },
    articlesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    articlesNext: (state, action) => {
      state.loading = false
      state.param.page++
    },
    articlesPrev: (state, action) => {
      state.loading = false
      state.param.page--
    },
  },
});

export const {
  reset,
  articlesRequested,
  articlesSucceeded,
  articlesFailed,
  articlesNext,
  articlesPrev
} = slice.actions;

export default slice.reducer;
