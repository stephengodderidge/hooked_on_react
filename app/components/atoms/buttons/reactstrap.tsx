import React, { SFC } from 'react';
import { Button } from 'reactstrap';
import { IBaseButtonProps } from '.';

export enum ButtonColor {
  RED = 'danger',
  GREEN = 'success',
  BLUE = 'primary',
  GREY = 'secondary',
}

export enum ButtonSize {
  SMALL = 'sm',
  LARGE = 'lg',
}

export interface IReactstrapButtonProps extends IBaseButtonProps {
  /**
   * [optional] Size of button
   *
   * @default MEDIUM
   */
  size?: ButtonSize;
  /**
   * [optional] Color of button
   *
   * @default GREY
   */
  color?: ButtonColor;
  /**
   * [optional] Controls boder around button and disables background color
   * when true
   */
  outline?: boolean;
}

const BaseButton: SFC<IReactstrapButtonProps> = props => {
  const { id, ...otherProps } = props;
  const handleClick = () => props.onClick(id || null);
  return <Button {...otherProps} onClick={handleClick} />;
};

export const PrimaryButton: SFC<IReactstrapButtonProps> = props => (
  <BaseButton {...props} />
);

export const SecondaryButton: SFC<IReactstrapButtonProps> = props => (
  <BaseButton {...props} outline />
);
