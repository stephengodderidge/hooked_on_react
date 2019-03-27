import React, { SFC } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { colors } from 'modules/config/colors';
import { IBaseButtonProps } from '.';

// #region Styling
const GREEN = colors.green;
const WHITE = colors.white;

export enum ButtonColor {
  BLUE = 'primary',
  RED = 'secondary',
  GREY = 'default',
  GREEN = 'green',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type TMaterialUiColor = 'default' | 'inherit' | 'primary' | 'secondary';

const materialUiColors = [
  ButtonColor.BLUE,
  ButtonColor.GREY,
  ButtonColor.RED,
  null,
  undefined,
];

const isMaterialUiColor = (
  color: ButtonColor | TMaterialUiColor,
): color is TMaterialUiColor => materialUiColors.includes(color as ButtonColor);

const getBackgroundColor = (color: ButtonColor) => {
  switch (color) {
    case ButtonColor.GREEN:
    default:
      return GREEN;
  }
};

const getColor = (color: ButtonColor, variant: string) => {
  if (['text', 'outlined'].includes(variant)) {
    switch (color) {
      case ButtonColor.GREEN:
      default:
        return GREEN;
    }
  }
  switch (color) {
    case ButtonColor.GREEN:
    default:
      return WHITE;
  }
};

const getBorderColor = (color: ButtonColor) => {
  switch (color) {
    case ButtonColor.GREEN:
    default:
      return GREEN;
  }
};

const getHoverStyles = (color: ButtonColor, variant: TMaterialUiVariant) => {
  if (['outlined'].includes(variant)) {
    switch (color) {
      case ButtonColor.GREEN:
      default:
        return {
          background: `${GREEN}CC`,
        };
    }
  }
  return undefined;
};

const shouldHaveBackground = (variant: TMaterialUiVariant) =>
  ['contained', 'fab', 'extendedFab'].includes(variant);

const shouldHaveBorderColor = (variant: TMaterialUiVariant) =>
  ['outlined'].includes(variant);

const getStyle = (props: IMaterialBaseButtonProps) => {
  const background = shouldHaveBackground(props.variant)
    ? getBackgroundColor(props.color)
    : undefined;
  const color = getColor(props.color, props.variant);
  const borderColor = shouldHaveBorderColor(props.variant)
    ? getBorderColor(props.color)
    : undefined;
  const hoverStyles = getHoverStyles(props.color, props.variant);
  const styles = {
    background,
    color,
    borderColor,
    '&:hover': hoverStyles,
  };
  return styles;
};
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
  const style = getStyle(props);
  const isFab = ['fab', 'extendedFab'].includes(variant);
  const fabVariant = isFab && variant === 'fab' ? 'round' : 'extended';
  if (isMaterialUiColor(color)) {
    return isFab ? (
      <Fab
        {...otherProps}
        color={color}
        onClick={handleClick}
        variant={fabVariant}
      />
    ) : (
      <Button
        {...otherProps}
        color={color}
        onClick={handleClick}
        variant={variant}
      />
    );
  }
  return isFab ? (
    <Fab {...otherProps} style={style} onClick={handleClick} variant={fabVariant} />
  ) : (
    <Button {...otherProps} style={style} onClick={handleClick} variant={variant} />
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
