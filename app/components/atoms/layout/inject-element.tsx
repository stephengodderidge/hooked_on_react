import React, { SFC } from 'react';
import { IDefaultProps } from 'types/default-props';

interface IInjectElementProps extends IDefaultProps {
  /**
   * [required] An element to add as dividers between children
   */
  element: JSX.Element;
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
