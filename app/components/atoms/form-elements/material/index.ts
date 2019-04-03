import { IDefaultProps } from 'types/default-props';

export * from './checkbox';
export * from './radio-button';
export * from './text-input';
export * from './dropdown';

export enum MaterialFormElementColors {
  BLUE = 'primary',
  RED = 'secondary',
  DEFAULT = 'default',
}

export interface ISharedMaterialFormElementProps extends IDefaultProps {
  /**
   * [optional] Checkbox color
   *
   * @default BLUE
   */
  color?: MaterialFormElementColors;
  /**
   * [required] Value representing form element.  Will be passed to `onChange` callback
   */
  value: string;
  /**
   * [optional] Disables form element interactivity
   */
  disabled?: boolean;
}

export interface IMaterialFormToggleElementProps
  extends ISharedMaterialFormElementProps {
  /**
   * [required] Callback for when user interacts with form element
   */
  onChange: (value: string, checked: boolean) => void;
  /**
   * [optional] Controls checked state of checkbox
   *
   * @default `false`
   */
  checked?: boolean;
  /**
   * [optional] Enables indeterminate state for checkbox (partial selection)
   *
   * HAS NO EFFECT ON RADIO BUTTON
   */
  indeterminate?: boolean;
}
