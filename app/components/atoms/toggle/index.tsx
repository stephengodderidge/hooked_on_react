import { SFC, useState } from 'react';
import { RenderPropsCallback } from 'types/render-props-callback';

/** Props to be passed to Toggle component */
export interface IToggleProps {
  /** Sets isToggled to default value provided */
  defaultOn?: boolean;
  /** Child function to receive IChildrenProps from Toggle */
  children: RenderPropsCallback<IChildrenProps>;
}

/** Props that will be passed to Child function */
interface IChildrenProps {
  /** Whether Toggle is on or off */
  isToggled: boolean;
  /** Callback for flipping the state of the Toggle */
  toggleState?: () => any;
}

/** Provides Boolean State Management - i.e. a toggle switch */
export const Toggle: SFC<IToggleProps> = props => {
  const [isToggled, setToggle] = useState(props.defaultOn || false);

  const toggleState = () => {
    setToggle(!isToggled);
  };

  return props.children({ isToggled, toggleState });
};
