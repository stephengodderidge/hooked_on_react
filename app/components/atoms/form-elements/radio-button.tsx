import React, { SFC } from 'react';
import { IFormElementProps } from '.';

export const RadioButton: SFC<IFormElementProps> = props => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.value);
  return <input {...props} type="radio" onChange={onChange} />;
};
