import { fromJS } from "immutable";
import { createSelector } from "reselect";

import { cardGenerator } from "../helpers/cardGenerator";

export const types = {
  SET_USERNAME: "SET_USERNAME",

  TURN_CARD: "TURN_CARD",
  TURN_CARD_SUCCESS: "TURN_CARD_SUCCESS",
  TURN_CARD_ERROR: "TURN_CARD_ERROR",

  REMOVE_ITEM_LOADING: "REMOVE_ITEM_LOADING",
  REMOVE_ITEM_SUCCESS: "REMOVE_ITEM_LOAD_SUCCESS",
  REMOVE_ITEM_ERROR: "REMOVE_ITEM_LOAD_ERROR"
};

export const actions = {
  setUserName: username => ({ type: types.SET_USERNAME, username }),

  turnCard: () => ({ type: types.TURN_CARD }),
  turnCardSuccess: payload => ({ type: types.TURN_CARD_SUCCESS, payload }),
  turnCardError: error => ({ type: types.TURN_CARD_ERROR, error }),

  removeItemLoading: cityID => ({ type: types.REMOVE_ITEM_LOADING, cityID }),
  removeItemSuccess: payload => ({ type: types.REMOVE_ITEM_SUCCESS, payload }),
  removeItemError: error => ({ type: types.REMOVE_ITEM_ERROR, error })
};

const cards = cardGenerator();

const initialState = fromJS({
  username: "",
  score: 0,
  cards: cards,
  error: null,
  loading: false
});

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TURN_CARD:
      return state.set("loading", fromJS(true));
    case types.TURN_CARD_SUCCESS:
      return state.set("data", fromJS(action.payload)).set("loading", false);
    case types.TURN_CARD_ERROR:
      return state.set("error", fromJS(action.error)).set("loading", false);
    case types.REMOVE_ITEM_SUCCESS:
      return state.set("data", fromJS(action.payload));
    case types.REMOVE_ITEM_ERROR:
      return state.set("error", fromJS(action.error));
    case types.SET_USERNAME:
      return state.set("username", fromJS(action.username));
    default:
      return state;
  }
};

export const game = state => state.game;

export const makeSelectGameData = () =>
  createSelector(
    game,
    substate => substate.toJS()
  );

export default gameReducer;
