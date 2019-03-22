import React, { SFC } from 'react';
import { IFormElementProps, IPlaceholderProp } from './';

export const TextInput: SFC<IFormElementProps & IPlaceholderProp> = props => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.value);
  return <input {...props} type="text" value={props.value} onChange={onChange} />;
};
