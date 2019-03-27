import React, { SFC } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { IBaseButtonProps } from '.';

export enum ButtonColor {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  GREY = 'grey',
}

export enum ButtonSize {
  SMALL = 'mini',
  MEDIUM = 'medium',
  LARGE = 'big',
  EXTRA_LARGE = 'massive',
}

export interface ISemanticButtonProps extends IBaseButtonProps {
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
}

const BaseButton: SFC<ISemanticButtonProps> = props => {
  const { id, ...otherProps } = props;
  const handleClick = () => props.onClick(id || null);
  return <Button {...otherProps} onClick={handleClick} />;
};

export const PrimaryButton: SFC<ISemanticButtonProps> = props => (
  <BaseButton {...props} />
);

export const SecondaryButton: SFC<ISemanticButtonProps> = props => (
  <BaseButton {...props} basic />
);

const Hack = styled.div`
  .ui.basic.button {
    box-shadow: none !important;
  }
`;

export const TertiaryButton: SFC<ISemanticButtonProps> = props => (
  <Hack>
    <BaseButton {...props} basic />
  </Hack>
);
