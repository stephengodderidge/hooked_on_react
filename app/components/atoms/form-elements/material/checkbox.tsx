import React, { SFC, ChangeEvent } from 'react';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import { MaterialFormElementColors, IMaterialFormToggleElementProps } from '.';

export const Checkbox: SFC<IMaterialFormToggleElementProps> = props => {
  const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) =>
    props.onChange(e.target.value, checked);
  return (
    <MaterialCheckbox
      {...props}
      color={props.color || MaterialFormElementColors.BLUE}
      onChange={onChange}
    />
  );
};
