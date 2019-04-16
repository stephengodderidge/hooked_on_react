import React, { SFC, ChangeEvent } from 'react';
import MaterialInput from '@material-ui/core/Input';
import { ISharedMaterialFormElementProps, MaterialFormElementColors } from '.';

export const TextInput = props => {
  const onChange = e => props.onChange(e.target.value);
  return (
    <MaterialInput
      {...props}
      color={props.color || MaterialFormElementColors.BLUE}
      onChange={onChange}
    />
  );
};
