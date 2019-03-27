import { IDefaultProps } from 'types/default-props';

export * from './checkbox';
export * from './dropdown';
export * from './radio-button';
export * from './text-input';

export interface IFormElementProps extends IDefaultProps {
  /**
   * [required] Callback that will fire when the user
   * updates the form element
   *
   * This callback will be triggered in the following scenarios:
   *  - When a user clicks a checkbox or radio button
   *  - On every keystroke while a user enters information in a text input
   */
  onChange: (value: string) => void;
  /**
   * [optional] When `true`, form element will not be interactive
   */
  disabled?: boolean;
  /**
   * [required] `value` will be passed to the onChange callback
   * when user clicks on form element
   */
  value: string;
}

export interface IPlaceholderProp {
  /**
   * [optional] placeholder when nothing has been selected
   */
  placeholder?: string;
}
