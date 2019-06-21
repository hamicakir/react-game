import React, { Component } from 'react';

import styles from './styles.scss';

type Props = {
  type: string,
  name: string
}

class InputField extends Component<Props> {

  render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { type, name } = this.props;
    return (
      <input type={type} name={name} />
    );
  }
}

export default InputField;