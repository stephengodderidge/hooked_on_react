import React from 'react';

export const InjectElement = props => (
  <>
    {React.Children.toArray(props.children).map((child, index) =>
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
