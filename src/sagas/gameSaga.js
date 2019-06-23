// @flow
import { call, select, put, takeLatest, takeEvery } from "redux-saga/effects";
import { get } from "immutable";

import { actions, types } from "../reducers/gameReducer";

export function* setUser({ username }) {
  console.log("Params", username);
  try {
    yield put(actions.setUserName(username));
  } catch (error) {
    console.log(error);
  }
}


export function* turnCard() {
  try {
    yield put(actions.turnCardSuccess());
  } catch (error) {
    yield put(actions.turnCardSuccess(error));
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
  takeLatest(types.TURN_CARD, turnCard),
  takeLatest(types.REMOVE_ITEM_LOADING, removeItem),
  takeEvery(types.SET_USERNAME, setUser)
];
