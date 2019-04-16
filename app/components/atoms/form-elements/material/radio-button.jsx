import React, { SFC, ChangeEvent } from 'react';
import MaterialRadioButton from '@material-ui/core/Radio';
import { MaterialFormElementColors, IMaterialFormToggleElementProps } from '.';

export const RadioButton = props => {
  const onChange = (e, checked) => props.onChange(e.target.value, checked);
  return (
    <MaterialRadioButton
      {...props}
      color={props.color || MaterialFormElementColors.BLUE}
      onChange={onChange}
    />
  );
};
