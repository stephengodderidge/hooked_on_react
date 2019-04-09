import React, { SFC, ChangeEvent } from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core/';
import { ISharedMaterialFormElementProps, MaterialFormElementColors } from '.';

export interface IMaterialFormSelectElementProps
  extends ISharedMaterialFormElementProps {
  /**
   * [required] Callback for when user updates form element
   */
  onChange: (value: string) => void;
  /**
   * [optional] Enables error styling on select element
   */
  error?: boolean;
  /**
   * [required] Options to display in dropdown menu
   */
  options: string[];
  /**
   * [required] Label associated with dropdown
   */
  label: string;
}

export const Dropdown: SFC<IMaterialFormSelectElementProps> = ({
  label,
  options,
  ...props
}) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>) =>
    props.onChange(e.target.value);
  return (
    <FormControl className={props.className}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Select
        {...props}
        color={props.color || MaterialFormElementColors.BLUE}
        onChange={onChange}
        inputProps={{
          id: label,
        }}
      >
        {options.map(o => (
          <MenuItem key={o} value={o}>
            {o}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
