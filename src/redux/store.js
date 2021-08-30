import {configureStore} from '@reduxjs/toolkit'
import reducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/rootSaga";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    sagaMiddleware,
  ],
});

store.sagaTask = sagaMiddleware.run(rootSaga);

export default store
