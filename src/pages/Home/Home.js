import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../components/Button";
import Header from "../../components/Header";
import InputField from "../../components/InputField";

import styles from "./Home.module.scss";
import { actions } from "../../reducers/gameReducer";

class Home extends Component {
  state = {
    username: null
  };

  handleNameInputChange = e => {
    this.setState({ username: e.target.value });
  };

  startGame = () => {
    console.log("Clicked");
    const { setUsername } = this.props;
    const { username } = this.state;

    if (username && username.length > 0) {
      setUsername(username);
    }
  };

  render() {
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

const mapDispatchToProps = dispatch => {
  return {
    setUsername: username => dispatch(actions.setUserName(username))
  };
};

export default connect(null, mapDispatchToProps)(Home);
