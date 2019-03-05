import { Fonts, LayoutElements } from 'components';
import { Toggle } from 'components/atoms';
import React, { SFC } from 'react';
import styled from 'styled-components';

const HoverableText = styled(Fonts.Body1)`
  &:hover {
    cursor: pointer;
  }
`;

interface IHierarchyNode {
  /** Indicates whether parent is in expanded state */
  isExpanded: boolean;
  /** Callback when component is clicked */
  onClick: () => void;
}

const HierarchyNode: SFC<IHierarchyNode> = props => (
  <HoverableText onClick={props.onClick}>
    {props.children} {props.isExpanded ? '-' : '+'}
  </HoverableText>
);

const Spacer = styled.div`
  width: 12px;
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
const childIsMyObject = (child: IMyObject | any): child is IMyObject =>
  child && child.name && child.children;

// Helper to determine if children array has valid children
const childHasChildren = (child: IMyObject) =>
  child.children &&
  child.children.length > 0 &&
  child.children.every(c => childIsMyObject(c));

/** Generates a Hierarchical structure for a nested object */
export const Hierarchy: SFC<IHierarchyProps> = props => {
  if (childIsMyObject(props.children)) {
    return childHasChildren(props.children) ? (
      <Toggle>
        {renderProps => {
          return (
            <LayoutElements.Column>
              <HierarchyNode
                isExpanded={renderProps.isToggled}
                onClick={renderProps.toggleState}
              >
                {props.children.name}
              </HierarchyNode>
              {renderProps.isToggled &&
                props.children.children.map(child => (
                  <LayoutElements.Row key={child.name}>
                    <Spacer />
                    <Hierarchy>{child}</Hierarchy>
                  </LayoutElements.Row>
                ))}
            </LayoutElements.Column>
          );
        }}
      </Toggle>
    ) : (
      <Fonts.Body1>{props.children.name}</Fonts.Body1>
    );
  }
  return null;
};
