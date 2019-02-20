import { Fonts, LayoutElements } from 'components';
import { Toggle } from 'components/atoms';
import React, { SFC } from 'react';
import styled from 'styled-components';

interface ISpacerProps {
  halfWidth: boolean;
}

const Spacer = styled.div<ISpacerProps>`
  width: ${props => (props.halfWidth ? 12 : 32)}px;
`;

const HierarchyRow = styled(LayoutElements.Row)`
  &:hover {
    cursor: pointer;
  }
`;

export interface IMyObject {
  /** Name of child within hierarchy */
  name: string;
  /** Nested children within hierarchy */
  children: IMyObject[];
}

export interface IHierarchyProps {
  /** Children passed to this component must match the IMyObject Interface */
  children: IMyObject;
}

// Type Guard
const childIsMyObject = (child: IMyObject | any): child is IMyObject => {
  return child && child.name && child.children;
};

const childHasChildren = (child: IMyObject) =>
  child.children && child.children.length > 0;

/** Generates a Hierarchical structure for a nested object */
export const Hierarchy: SFC<IHierarchyProps> = props => {
  if (childIsMyObject(props.children)) {
    return childHasChildren(props.children) ? (
      <HierarchyRow>
        <Toggle>
          {renderProps => {
            return renderProps.isToggled ? (
              <LayoutElements.Column>
                <Fonts.Body1 onClick={renderProps.toggleState}>
                  - {props.children.name}
                </Fonts.Body1>
                {props.children.children.map(child => (
                  <HierarchyRow key={child.name}>
                    <Spacer halfWidth={childHasChildren(child)} />
                    <Hierarchy>{child}</Hierarchy>
                  </HierarchyRow>
                ))}
              </LayoutElements.Column>
            ) : (
              <Fonts.Body1 onClick={renderProps.toggleState}>
                + {props.children.name}
              </Fonts.Body1>
            );
          }}
        </Toggle>
      </HierarchyRow>
    ) : (
      <HierarchyRow>
        <Fonts.Body1>{props.children.name}</Fonts.Body1>
      </HierarchyRow>
    );
  }
  return null;
};
