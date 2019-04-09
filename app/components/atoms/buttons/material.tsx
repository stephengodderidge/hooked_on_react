import React, { SFC } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { IBaseButtonProps } from '.';

// #region Styling
export enum ButtonColor {
  BLUE = 'primary',
  RED = 'secondary',
  DEFAULT = 'default',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

// #endregion Styling

interface IMaterialButtonColorProp {
  /**
   * [optional] Color of button
   *
   * @default GREY
   */
  color?: ButtonColor;
}

interface IMaterialButtonSizeProps {
  /**
   * [optional] Size of button
   *
   * @default MEDIUM
   */
  size?: ButtonSize;
}

type TMaterialButtonVariantProps = IBaseButtonProps &
  IMaterialButtonColorProp &
  IMaterialButtonSizeProps;

export interface IMaterialBaseButtonProps extends TMaterialButtonVariantProps {
  /**
   * [required] Variant of button.  Used to configure button based on 3rd
   * party component library
   *
   * In this app, these values equate to:
   *    contained = PrimaryButton
   *    outlined = SecondaryButton
   *    text = TertiaryButton
   *    fab = ActionButton
   *    extendedFab = ActionButton w/ `extended={true}`
   */
  variant: TMaterialUiVariant;
}

type TMaterialUiVariant = 'text' | 'outlined' | 'contained' | 'fab' | 'extendedFab';

const BaseButton: SFC<IMaterialBaseButtonProps> = props => {
  const { id, color, variant, ...otherProps } = props;
  const handleClick = () => props.onClick(id || null);
  const isFab = ['fab', 'extendedFab'].includes(variant);
  const fabVariant = isFab && variant === 'fab' ? 'round' : 'extended';

  return isFab ? (
    <Fab {...otherProps} color={color} onClick={handleClick} variant={fabVariant} />
  ) : (
    <Button {...otherProps} color={color} onClick={handleClick} variant={variant} />
  );
};

export const PrimaryButton: SFC<TMaterialButtonVariantProps> = props => (
  <BaseButton {...props} variant="contained" />
);

export const SecondaryButton: SFC<TMaterialButtonVariantProps> = props => (
  <BaseButton {...props} variant="outlined" />
);

export const TertiaryButton: SFC<TMaterialButtonVariantProps> = props => (
  <BaseButton {...props} variant="text" />
);

export interface IActionButtonProps
  extends IBaseButtonProps,
    IMaterialButtonColorProp {
  /**
   * [optional] Enables extended Action Button styles for oblong
   * FAB's
   *
   * @default false
   */
  extended?: boolean;
}

export const ActionButton: SFC<IActionButtonProps> = ({ extended, ...props }) => (
  <BaseButton {...props} variant={extended ? 'extendedFab' : 'fab'} />
);

export type TMaterialButtonProps = IMaterialBaseButtonProps | IActionButtonProps;
