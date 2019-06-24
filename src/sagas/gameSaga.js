// @flow
import { put, takeLatest, take } from "redux-saga/effects";

import { actions, types } from "../reducers/gameReducer";

export function* userName({ username }) {
  yield put(actions.setUserName(username));
}

export function* turnCard({ id }) {
  try {
    console.log("ID", id);
    yield put(actions.turnCardSuccess());
  } catch (error) {
    yield put(actions.turnCardError(error));
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
  take(types.SET_USERNAME, userName)
];
