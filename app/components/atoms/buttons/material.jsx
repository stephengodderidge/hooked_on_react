import React, { SFC } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { IBaseButtonProps } from '.';

// #region Styling
export const ButtonColor = {
  BLUE: 'primary',
  RED: 'secondary',
  DEFAULT: 'default',
};

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};
// #endregion Styling

const BaseButton = props => {
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

export const PrimaryButton = props => <BaseButton {...props} variant="contained" />;

export const SecondaryButton = props => <BaseButton {...props} variant="outlined" />;

export const TertiaryButton = props => <BaseButton {...props} variant="text" />;

export const ActionButton = ({ extended, ...props }) => (
  <BaseButton {...props} variant={extended ? 'extendedFab' : 'fab'} />
);
