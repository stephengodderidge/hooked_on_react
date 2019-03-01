import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components/atoms';
import React, { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { renderers } from '../components/atoms/fonts/markdown';

const docs = `
  # Children as Array
  The **Children as Array** pattern is frequently used with React.  In fact, any time more than
  one child is passed to a parent component, this pattern is being used.

  Because the parent component's children are an array, we can use regular JS to perform actions
  on that array with methods such as \`map\`, \`reduce\`, and \`forEach\`.  For example, we can
  inject other components between each child or rearrange the children altogether.

  ## Pattern Breakdown
  The \`RowWithPadding\` component will iterate over its children and add a padding element between
  each child.  This can be useful when multiple components need to be evenly spaced along a row at
  fixed inervales and other approaches like FlexBox do not provide the necessary layout utilities.

  \`\`\`tsx
  const RowWithPadding: SFC<IRowWithPadding> = props => (
    <FlexRow>
      {React.Children.toArray(props.children).map(
        (child: JSX.Element, index: number) =>
          index < props.children.length - 1 ? (
            <React.Fragment key={\`child-\${index}\`}>
              {child}
              <Padding width={props.childPadding} />
            </React.Fragment>
          ) : (
            child
          ),
      )}
    </FlexRow>
  );
  \`\`\`

  ## Pattern Usage
  When using this pattern, simply pass an array of JSX elements as children to the parent component.
  The \`RowWithPadding\` component will automatically inject a padding element between each child.
  For example:
  \`\`\`tsx
  <RowWithPadding>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
  </RowWithPadding>
  \`\`\`

  results in:
  \`\`\`tsx
  <RowWithPadding>
    <FirstChildComponent />
    <Padding />
    <SecondChildComponent />
    <Padding />
    <ThirdChildComponent />
  </RowWithPadding>
  \`\`\`

  ## Example Implementation - RowWithPadding for evenly spaced buttons

`;

const docs2 = `
  ## Example Implementation - Sorted RowWithPadding for evenly spaced, sorted children

`;

const Button = styled.button`
  padding: 8px 16px;
`;

const rowWithPadding = (
  <LayoutElements.RowWithPadding>
    <Button key="back">Back</Button>
    <Button key="cancel">Cancel</Button>
    <Button key="ok">Ok</Button>
  </LayoutElements.RowWithPadding>
);

const sortedRowWithPadding = (
  <LayoutElements.SortedRowWithPadding>
    <Fonts.Body1 key="zebra">Zebra</Fonts.Body1>
    <Fonts.Body1 key="monkey">Monkey</Fonts.Body1>
    <Fonts.Body1 key="alligator">Alligator</Fonts.Body1>
  </LayoutElements.SortedRowWithPadding>
);

const ChildArrayStory: SFC<{}> = () => (
  <React.Fragment>
    <ReactMarkdown renderers={renderers} source={docs} />
    {rowWithPadding}
    <ReactMarkdown renderers={renderers} source={docs2} />
    {sortedRowWithPadding}
  </React.Fragment>
);

storiesOf('_PATTERNS', module).add('2 - Children as Array', () => (
  <ChildArrayStory />
));
