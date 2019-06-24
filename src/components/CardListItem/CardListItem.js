import React from "react";

import styles from "./CardListItem.module.scss";

function CardListItem({ item, turnCard }) {
  const { id, imgUrl, turned } = item;
  return (
    <div className={styles.item} onClick={() => turnCard(id)}>
      <div className={styles.flipped}>
        <img className={turned ? styles.active : styles.passive} src={imgUrl} />
      </div>
    </div>
  );
}

export default CardListItem;
