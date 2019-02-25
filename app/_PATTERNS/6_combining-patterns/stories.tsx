import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components';
import { Toggle } from 'components/atoms';
import React, { SFC, useState } from 'react';
import styled from 'styled-components';
import docs from './docs.mkd';

interface IHierarchySelectionContext {
  selections: string[];
  updateSelections: (selection: string) => void;
}
const HierarchySelectionContext = React.createContext<IHierarchySelectionContext>({
  selections: [],
  updateSelections: () => null,
});
const useHierarchySelection = () => {
  const [selections, setSelections] = useState([]);
  const updateSelections = (selection: string) =>
    selections.includes(selection)
      ? setSelections(selections.filter(value => value !== selection))
      : setSelections(selections.concat(selection));
  return { selections, updateSelections };
};

const HierarchySelection: SFC<{}> = props => {
  return (
    <HierarchySelectionContext.Provider value={useHierarchySelection()}>
      {props.children}
    </HierarchySelectionContext.Provider>
  );
};

const CheckboxRow = styled(LayoutElements.Row)`
  align-items: flex-start;
`;

interface IChildrenWithCheckboxesProps {
  children: JSX.Element[];
}

const ChildrenWithCheckboxes: SFC<IChildrenWithCheckboxesProps> = props => (
  <HierarchySelectionContext.Consumer>
    {({ selections, updateSelections }) =>
      props.children.map(child => {
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
          updateSelections(e.target.value);
        return (
          <CheckboxRow key={child.key}>
            <input
              type="checkbox"
              value={child.key}
              onChange={onChange}
              checked={selections.includes(child.key.toString())}
            />
            {child}
          </CheckboxRow>
        );
      })
    }
  </HierarchySelectionContext.Consumer>
);

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
              {renderProps.isToggled && (
                <ChildrenWithCheckboxes>
                  {props.children.children.map(child => (
                    <LayoutElements.Row key={child.name}>
                      <Spacer />
                      <Hierarchy>{child}</Hierarchy>
                    </LayoutElements.Row>
                  ))}
                </ChildrenWithCheckboxes>
              )}
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

storiesOf('_PATTERNS', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: docs,
      source: false,
      header: false,
      propTables: [],
      propTablesExclude: [],
      inline: true,
    },
  })
  .add('6 - Combining Patterns', () => (
    <HierarchySelection>
      <Hierarchy>{hierarchy}</Hierarchy>
    </HierarchySelection>
  ));
