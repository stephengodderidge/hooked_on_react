import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components';
import { Toggle } from 'components/atoms';
import React, { SFC } from 'react';
import styled from 'styled-components';

interface ISpacerProps {
  halfWidth: boolean;
}

const Spacer = styled.div<ISpacerProps>`
  ${props => {
    return `width: ${props.halfWidth ? 12 : 32}px;`;
  }}
`;

interface IMyObject {
  name: string;
  children: IMyObject[];
}

interface IHierarchyProps {
  children: IMyObject;
}

// Type Guard
const childIsMyObject = (child: IMyObject | any): child is IMyObject => {
  return child && child.name && child.children;
};

const childHasChildren = (child: IMyObject) =>
  child.children && child.children.length > 0;

const HierarchyParent: SFC<IHierarchyProps> = props => {
  if (childIsMyObject(props.children)) {
    return childHasChildren(props.children) ? (
      <LayoutElements.Row>
        <Toggle>
          {renderProps => {
            return renderProps.isToggled ? (
              <LayoutElements.Column>
                <Fonts.Body1 onClick={renderProps.toggleState}>
                  - {props.children.name}
                </Fonts.Body1>
                {props.children.children.map(child => (
                  <LayoutElements.Row>
                    <Spacer halfWidth={childHasChildren(child)} />
                    <HierarchyParent key={child.name}>{child}</HierarchyParent>
                  </LayoutElements.Row>
                ))}
              </LayoutElements.Column>
            ) : (
              <Fonts.Body1 onClick={renderProps.toggleState}>
                + {props.children.name}
              </Fonts.Body1>
            );
          }}
        </Toggle>
      </LayoutElements.Row>
    ) : (
      <LayoutElements.Row>
        <Fonts.Body1>{props.children.name}</Fonts.Body1>
      </LayoutElements.Row>
    );
  }
  return null;
};

const hierarchy: IMyObject = {
  name: 'Hierarchy Level 1',
  children: [
    {
      name: 'Hierarchy Child 1',
      children: [],
    },
    {
      name: 'Hierarchy Child 2',
      children: [
        {
          name: 'Nested Child',
          children: [],
        },
      ],
    },
  ],
};

storiesOf('_PATTERNS', module).add(
  'Children as Object',
  withInfo({
    text: 'rowDocs',
    source: false,
    header: false,
    propTables: [],
    propTablesExclude: [],
    inline: true,
  })(() => <HierarchyParent>{hierarchy}</HierarchyParent>),
);
