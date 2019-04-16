import React, { SFC, ChangeEvent } from 'react';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import { MaterialFormElementColors, IMaterialFormToggleElementProps } from '.';

export const Checkbox = props => {
  const onChange = (e, checked) => props.onChange(e.target.value, checked);
  return (
    <MaterialCheckbox
      {...props}
      color={props.color || MaterialFormElementColors.BLUE}
      onChange={onChange}
    />
  );
};
