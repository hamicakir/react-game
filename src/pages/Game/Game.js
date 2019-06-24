import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CardList from "../../components/CardList";

import styles from "./Game.module.scss";
import {actions, makeSelectGameData} from "../../reducers/gameReducer";

class Game extends Component {
  render(): React.ReactElement<any> {
    const {
      gameData: { cards },
      turnCard
    } = this.props;

    return <div className={styles.wrapper}>{cards && <CardList cards={cards} turnCard={turnCard} />}</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  gameData: makeSelectGameData()
});

const mapDispatchToProps = dispatch => {
  return {
    turnCard: id => dispatch(actions.turnCard(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
