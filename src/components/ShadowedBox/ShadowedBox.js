import React from "react";

import styles from "./ShadowedBox.module.scss";

function ShadowedBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default ShadowedBox;
