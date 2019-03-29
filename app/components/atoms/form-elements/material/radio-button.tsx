import React, { SFC, ChangeEvent } from 'react';
import MaterialRadioButton from '@material-ui/core/Radio';
import { ISharedMaterialFormElementProps, MaterialFormElementColors } from '.';

export const RadioButton: SFC<ISharedMaterialFormElementProps> = props => {
  const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) =>
    props.onChange(e.target.value, checked);
  return (
    <MaterialRadioButton
      {...props}
      color={props.color || MaterialFormElementColors.BLUE}
      onChange={onChange}
    />
  );
};
