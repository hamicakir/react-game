import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CardList from "../../components/CardList";

import styles from "./Game.module.scss";
import { makeSelectGameData } from "../../reducers/gameReducer";

class Game extends Component {
  render(): React.ReactElement<any> {
    const {
      gameData: { cards }
    } = this.props;
    console.log("GAME_CARDS", cards);

    return <div className={styles.wrapper}>{cards && <CardList cards={cards} />}</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  gameData: makeSelectGameData()
});

export default connect(mapStateToProps)(Game);
