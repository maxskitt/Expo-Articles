import {combineReducers} from '@reduxjs/toolkit';
import articles from "./slices/articles";
import {reducer as formReducer} from 'redux-form';
import users from "./slices/users";

export default combineReducers({
  articles,
  users,
  form: formReducer,
})

