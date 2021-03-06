// @flow
import { select, put, take, takeLatest } from "redux-saga/effects";

import { actions, types, game } from "../reducers/gameReducer";

export function* userName({ username }) {
  yield put(actions.setUserName(username));
}

export function* turnCard({ id }) {
  try {
    const tempState = yield select(game);
    const state = tempState.toJS();

    let cardClicked = state.cards.find(card => {
      return card.id === id;
    });

    let newState = { score: state.score + 1 };

    if (state.score % 2 === 1) {
      newState = {
        ...newState,
        firstGuess: cardClicked.id,
        secondGuess: null,
        cards: state.cards.map(card => {
          return card.id === id
            ? { ...card, turned: true }
            : { ...card, turned: false };
        })
      };
    } else {
      if (cardClicked.relation === state.firstGuess) {
        newState = {
          ...newState,
          firstGuess: state.firstGuess,
          secondGuess: cardClicked.rel,
          cards: state.cards.map(card => {
            return card.id === id || card.id === state.firstGuess
              ? { ...card, turned: true, discovered: true }
              : card;
          })
        };
      } else {
        newState = {
          ...newState,
          firstGuess: state.firstGuess,
          secondGuess: cardClicked.rel,
          cards: state.cards.map(card => {
            return card.id === id ? { ...card, turned: true } : card;
          })
        };
      }
    }
    yield put(actions.turnCardSuccess(newState));
  } catch (error) {
    yield put(actions.turnCardSuccess(error));
  }
}

export default [
  takeLatest(types.TURN_CARD, turnCard),
  take(types.SET_USERNAME, userName)
];
