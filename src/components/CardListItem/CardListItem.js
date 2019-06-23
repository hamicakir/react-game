import React from 'react';

import styles from './CardListItem.module.scss';

function CardListItem({item}) {
  const { imgUrl } = item;
  return (
    <div className={styles.item}>
      <img src={imgUrl} />
    </div>
  )
}

export default CardListItem;