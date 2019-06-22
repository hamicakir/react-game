import React, { Component } from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string,
  onClick: any
}
class Button extends Component<Props> {

  render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { label, onClick } = this.props;
    return (
      <div className={styles.btn} onClick={onClick}>
        <span className={styles.label}>{label}</span>
      </div>
    );
  }
};

export default Button;