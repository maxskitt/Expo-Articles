import { takeEvery, call, put } from "redux-saga/effects";
import {fetchUser} from "./api";
import {usersFailed, usersRequested, usersSucceeded} from "../../redux/slices/users";

function* usersRequest(action) {
  try {
    const response = yield call(fetchUser, action.payload);
    yield put(usersSucceeded({ articles: response }));
  } catch (error) {
    yield put(usersFailed({ error }));
  }
}

function* users() {
  yield takeEvery(usersRequested, usersRequest);
}

export default users;
