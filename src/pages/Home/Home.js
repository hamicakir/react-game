import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../components/Button";
import Header from "../../components/Header";
import InputField from "../../components/InputField";

import styles from "./Home.module.scss";
import {actions, makeSelectGameData} from "../../reducers/gameReducer";

class Home extends Component {
  state = {
    username: null
  };

  handleNameInputChange = e => {
    this.setState({ username: e.target.value });
  };

  startGame = () => {
    console.log("Clicked");
    const { setUser, history: { push } } = this.props;
    const { username } = this.state;

    if (username && username.length > 0) {
      setUser(username);
      push('/game');
    }
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.formArea}>
            <InputField
              type="text"
              name="username"
              onChange={this.handleNameInputChange}
              placeholder="Username"
            />
            <Button label="Start Game" onClick={this.startGame} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = () => {
  return {
    cards: makeSelectGameData()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: username => dispatch(actions.setUserName(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
