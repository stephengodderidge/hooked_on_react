import React, { SFC } from 'react';
import { IFormElementProps, IPlaceholderProp } from '.';

interface IDropdownProps extends IFormElementProps, IPlaceholderProp {
  /**
   * [required] An array of selectable values to be shown
   * when the dropdown is open
   */
  options: string[];
}

export const Dropdown: SFC<IDropdownProps> = props => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    props.onChange(e.target.value);

  const renderPlaceholder = () => (
    <option label={props.placeholder} disabled hidden>
      {props.placeholder}
    </option>
  );

  return (
    <select onChange={onChange} defaultValue={props.placeholder || props.value}>
      {!!props.placeholder && renderPlaceholder()}
      {props.options.map(val => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
};
