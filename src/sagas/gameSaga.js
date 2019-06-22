// @flow
import { call, select, put, takeLatest } from "redux-saga/effects";
import { get } from "immutable";

import { actions, types } from "../reducers/gameReducer";

export function* setUsername({ username }) {
  console.log("Params", username);
  try {
    yield put(actions.setUserName(username));
  } catch (error) {

  }
}

export function* getList() {
  try {
    yield put(actions.listLoadSuccess());
  } catch (error) {
    yield put(actions.listLoadError(error));
  }
}

export function* removeItem() {
  try {
    yield put(actions.removeItemSuccess());
  } catch (error) {
    yield put(actions.removeItemError(error));
  }
}

export default [
  takeLatest(types.LIST_LOADING, getList),
  takeLatest(types.REMOVE_ITEM_LOADING, removeItem),
  takeLatest(types.SET_USERNAME, setUsername)
];
