import React, { Component } from 'react';

import styles from './InputField.module.scss';

type Props = {
  type: string,
  name: string,
  placeholder: string,
  onChange: any
}

class InputField extends Component<Props> {

  render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { type, name, placeholder, onChange } = this.props;
    return (
      <input type={type} name={name} className={styles.input} onChange={onChange} placeholder={placeholder} />
    );
  }
}

export default InputField;