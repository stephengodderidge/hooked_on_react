import { Component } from 'react';
import { RenderPropsCallback } from 'types/render-props-callback';

/** Props to be passed to Toggle component */
export interface IToggleProps {
  /** Sets isToggled to default value provided */
  defaultOn?: boolean;
  /** Child function to receive IChildrenProps from Toggle */
  children: RenderPropsCallback<IChildrenProps>;
}

/** State for Toggle component */
export interface IToggleState {
  /** Whether Toggle is on or off */
  isToggled: boolean;
}

/** Props that will be passed to Child function */
interface IChildrenProps extends IToggleState {
  /** Callback for flipping the state of the Toggle */
  toggleState?: () => any;
}

/** Provides Boolean State Management - i.e. a toggle switch */
export class Toggle extends Component<IToggleProps, IToggleState> {
  state = {
    isToggled: this.props.defaultOn || false,
  };

  toggleState = () => {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  };

  getToggleStateAndHelpers() {
    return {
      ...this.state,
      toggleState: this.toggleState,
    };
  }

  render() {
    return this.props.children(this.getToggleStateAndHelpers());
  }
}
