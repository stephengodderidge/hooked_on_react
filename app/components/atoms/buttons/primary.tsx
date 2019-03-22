import React, { SFC } from 'react';
import 'scss/ButtonComponent.scss';

export enum ButtonColor {
  PRIMARY = 'button-blue',
  ALT_PRIMARY = 'button-green',
  SECONDARY = 'button-primary-blue',
  TERTIARY = 'button-grey',
}

export interface IButtonProps {
  /**
   * [optional] Identifier to pass to onClick callback
   */
  id?: string;
  /**
   * [required] Callback when user clicks button
   *
   * `id` or `null` will be passed to `onClick`
   */
  onClick: (id?: string) => void;
  /**
   * [optional] Color of button
   *
   * @default PRIMARY
   */
  bgColor?: ButtonColor;
}

export const Button: SFC<IButtonProps> = ({ id, bgColor, ...props }) => {
  const handleClick = () => props.onClick(id || null);
  return (
    <button
      {...props}
      className={`button-spex ${bgColor || ButtonColor.PRIMARY}`}
      onClick={handleClick}
    />
  );
};
