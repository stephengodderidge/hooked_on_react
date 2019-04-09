import React, { SFC, ChangeEvent } from 'react';
import MaterialInput from '@material-ui/core/Input';
import { ISharedMaterialFormElementProps, MaterialFormElementColors } from '.';

export interface IMaterialFormTextElementProps
  extends ISharedMaterialFormElementProps {
  /**
   * [required] Callback for when user updates form element
   */
  onChange: (value: string) => void;
  /**
   * [optional] Enables error styling on text element
   */
  error?: boolean;
}

export const TextInput: SFC<IMaterialFormTextElementProps> = props => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.value);
  return (
    <MaterialInput
      {...props}
      color={props.color || MaterialFormElementColors.BLUE}
      onChange={onChange}
    />
  );
};
