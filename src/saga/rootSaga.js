import { all } from "redux-saga/effects";
import articles from "./articles";
import users from "./users";

function* rootSaga() {
  yield all([
    articles(),
    users()
  ])
}

export default rootSaga;
