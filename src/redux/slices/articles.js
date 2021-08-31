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
  filter: [
    false,
    false,
    false,
    false,
    false,
  ],
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
    articlesFilter: (state, action) => {
      state.loading = false
      state.filter[action.payload.id] = action.payload.filter
    },
    articlesFilterClear: (state, action) => {
      state.loading = false
      state.filter =  [
        false,
        false,
        false,
        false,
        false,
      ]
    },
  },
});

export const {
  reset,
  articlesRequested,
  articlesSucceeded,
  articlesFailed,
  articlesNext,
  articlesPrev,
  articlesFilter,
  articlesFilterClear
} = slice.actions;

export default slice.reducer;
