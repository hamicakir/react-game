import { fromJS } from "immutable";
import { createSelector } from 'reselect';

export const types = {
  LIST_LOADING: "LIST_LOADING",
  LIST_LOAD_SUCCESS: "LIST_LOAD_SUCCESS",
  LIST_LOAD_ERROR: "LIST_LOAD_ERROR",

  REMOVE_ITEM_LOADING: "REMOVE_ITEM_LOADING",
  REMOVE_ITEM_SUCCESS: "REMOVE_ITEM_LOAD_SUCCESS",
  REMOVE_ITEM_ERROR: "REMOVE_ITEM_LOAD_ERROR",
};

export const actions = {
  listLoading: () => ({type: types.LIST_LOADING}),
  listLoadSuccess: (payload) => ({ type: types.LIST_LOAD_SUCCESS, payload}),
  listLoadError: (error) => ({ type: types.LIST_LOAD_ERROR, error }),

  removeItemLoading: (cityID) => ({type: types.REMOVE_ITEM_LOADING, cityID }),
  removeItemSuccess: (payload) => ({ type: types.REMOVE_ITEM_SUCCESS, payload}),
  removeItemError: (error) => ({ type: types.REMOVE_ITEM_ERROR, error }),
};

const initialState = fromJS({
  data: [],
  error: null,
  loading: false,
});

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_LOADING:
      return state
        .set("loading", fromJS(true));
    case types.LIST_LOAD_SUCCESS:
      return state
        .set("data", fromJS(action.payload))
        .set("loading", false);
    case types.LIST_LOAD_ERROR:
      return state
        .set("error", fromJS(action.error))
        .set("loading", false);
    case types.REMOVE_ITEM_SUCCESS:
      return state
        .set("data", fromJS(action.payload));
    case types.REMOVE_ITEM_ERROR:
      return state
        .set("error", fromJS(action.error));
    default:
      return state;
  }
};

export const list = state => state.list;

export const makeSelectList = () => createSelector(list, substate => substate.toJS());

export default exampleReducer;