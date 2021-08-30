import {combineReducers} from '@reduxjs/toolkit';
import articles from "./slices/articles";
import {persistReducer} from "redux-persist";
import {reducer as formReducer} from 'redux-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import users from "./slices/users";

export default combineReducers({
  articles,
  users,
  form: formReducer,
})
