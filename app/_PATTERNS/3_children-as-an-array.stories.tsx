import { storiesOf } from '@storybook/react';
import { Row } from 'components/atoms';
import { renderers } from 'components/atoms/fonts/markdown';
import React, { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { ExampleWrapper } from './shared-components';

const docs = `
  # Children as an Array
  The **Children as an Array** pattern is probably the most common pattern used in React; without
  most devs realizing it.  Any time multiple components are passed as children to a parent,
  the **Children as an Array** pattern is being used.

  In addition, JS array methods such as \`map\`, \`reduce\`, and \`forEach\` may be used to iterate
  over the children and perform actions on each child; i.e. inject other components between each
  child or rearrange the children altogether.

  ## Pattern Breakdown
  When multiple children are passed to a parent, \`props.children\` can be safely converted into an
  array using \`React.Children.toArray(props.children)\`.

  For example, this \`RowWithPadding\` component will iterate over its children and add a padding
  element between each child.  This can be useful when multiple components need to be evenly spaced
  along a row at fixed intervals.

  \`\`\`tsx
  const RowWithPadding: SFC<IRowWithPadding> = props => (
    <Row>
      {React.Children.toArray(props.children).map(
        (child: JSX.Element, index: number) =>
          index < props.children.length - 1 ? (
            <React.Fragment key={child.key}>
              {child}
              <Padding width={16} />
            </React.Fragment>
          ) : (
            child
          ),
      )}
    </Row>
  );
  \`\`\`

  ## Pattern Usage
  To use this pattern, pass an array of JSX elements as children to the parent \`RowWithPadding\`.
  The \`RowWithPadding\` component will automatically inject a padding element between each child:
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
  \`\`\`tsx
  const rowWithPadding = (
    <RowWithPadding>
      <Button key="back">Back</Button>
      <Button key="cancel">Cancel</Button>
      <Button key="ok">Ok</Button>
    </RowWithPadding>
  );
  \`\`\`

`;

const Button = styled.button`
  padding: 8px 16px;
`;

const rowWithPadding = (
  <Row childSpacing={16}>
    <Button key="back">Back</Button>
    <Button key="cancel">Cancel</Button>
    <Button key="ok">Ok</Button>
  </Row>
);

const ChildArrayStory: SFC<{}> = () => (
  <React.Fragment>
    <ReactMarkdown renderers={renderers} source={docs} />
    <ExampleWrapper>{rowWithPadding}</ExampleWrapper>
  </React.Fragment>
);

storiesOf('_PATTERNS', module).add('3 - Children as an Array', () => (
  <ChildArrayStory />
));
