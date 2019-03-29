export * from './checkbox';
export * from './radio-button';

export enum MaterialFormElementColors {
  BLUE = 'primary',
  RED = 'secondary',
  DEFAULT = 'default',
}

export interface ISharedMaterialFormElementProps {
  /**
   * [optional] Controls checked state of checkbox
   *
   * @default `false`
   */
  checked?: boolean;
  /**
   * [optional] Checkbox color
   *
   * @default BLUE
   */
  color?: MaterialFormElementColors;
  /**
   * [optional] Enables indeterminate state for checkbox (partial selection)
   */
  indeterminate?: boolean;
  /**
   * [required] Callback for when user interacts with checkbox
   */
  onChange: (value: string, checked: boolean) => void;
  /**
   * [required] Unique value to identify checkbox with.  Will be passed to `onChange` callback
   */
  value: string;
  /**
   * [optional] Disables checkbox interactivity
   */
  disabled?: boolean;
}
