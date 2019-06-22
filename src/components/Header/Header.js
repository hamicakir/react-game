import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return(
    <header className={styles.header}>
      <span className={styles.title}>React Card Game</span>
    </header>
  )
}

export default Header;