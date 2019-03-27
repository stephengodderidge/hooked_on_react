import React, { SFC } from 'react';

export interface IInjectElementProps {
  /**
   * [required] Element to be injected between each child
   */
  element: JSX.Element;
  /**
   * [required] Children of this component must be an array
   * of JSX Elements
   */
  children: JSX.Element[];
}

export const InjectElement: SFC<IInjectElementProps> = props => (
  <>
    {React.Children.toArray(props.children).map(
      (child: JSX.Element, index: number) =>
        index < props.children.length - 1 ? (
          <React.Fragment key={child.key}>
            {child}
            {props.element}
          </React.Fragment>
        ) : (
          child
        ),
    )}
  </>
);
