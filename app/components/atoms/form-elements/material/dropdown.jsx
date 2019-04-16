import React, { SFC, ChangeEvent } from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core/';
import { ISharedMaterialFormElementProps, MaterialFormElementColors } from '.';

export const Dropdown = ({ label, options, ...props }) => {
  const onChange = e => props.onChange(e.target.value);
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
