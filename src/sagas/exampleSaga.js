// @flow
import { call, select, put, takeLatest } from "redux-saga/effects";
import { get } from "immutable";

import { actions, list, types } from "../reducers/cityListReducer";
import data from "../data/apiResponse.json";
import cityListMapper from "../helpers/cityListMapper";

async function listApiCall() {
  return {
    data
  };
}

export function* getList() {
  try {
    const payload = yield call(listApiCall);
    if (payload) {
      yield put(actions.listLoadSuccess(payload));
    }
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
  takeLatest(types.REMOVE_ITEM_LOADING, removeItem)
];
