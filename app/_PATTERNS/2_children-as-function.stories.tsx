import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements, Toggle } from 'components/atoms';
import React, { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '../components/atoms/fonts/markdown';
import { ExampleWrapper } from './shared-components';

const docs = `
  # Children as Function
  The **Children as Function** pattern is most commonly referred to as **Render Props** and
  is preferred over a similar, likely-to-be-deprecated pattern called **Higher Order Components
  (HOC)**.  An [example](https://github.com/reduxjs/react-redux/blob/master/docs/api/connect.md)
  of an HOC is Redux's \`connect\` method.

  Render Props provides a more flexible interface than HOCs for sharing state data within a
  large component hierarchy.

  ## Pattern Breakdown
  A Render Prop component should be defined to accept a function as its only child. The child
  function's signature should also be typed to specify which data is accessible by the children.

  An example implementation of the Render Props pattern is a \`Toggle\` component.  An example
  \`Toggle\` component might contain a boolean state variable and a single callback to flip
  the value of that state variable:
  \`\`\`tsx
  const Toggle: SFC<IToggleProps> = props => {
    const [isToggled, setToggle] = useState(props.defaultOn || false);
  
    const toggleState = () => {
      setToggle(!isToggled);
    };
  
    return props.children({ isToggled, toggleState });
  };
  \`\`\`

  ## Pattern Usage
  When using the \`Toggle\` component, you must define the \`Toggle\`'s child as a function that
  will be passed arguments by the \`Toggle\`.  JavaScript's object destructuring syntax allows us
  to specify which parameters we want to use:
  \`\`\`tsx
  <Toggle>
    {({ isToggled, toggleState }) => (
      <Column>
        <BodyFont>Toggle is currently {isToggled ? 'on' : 'off'}</BodyFont>
        <button onClick={toggleState}>Toggle State</button>
      </Column>
    )}
  </Toggle>
  \`\`\`

  ## Example Implementation - On / Off Toggle
`;

const ToggleStory: SFC<{}> = () => (
  <React.Fragment>
    <ReactMarkdown renderers={renderers} source={docs} />
    <ExampleWrapper>
      <Toggle>
        {({ isToggled, toggleState }) => (
          <LayoutElements.Column>
            <Fonts.Body1>Toggle is currently {isToggled ? 'on' : 'off'}</Fonts.Body1>
            <button onClick={toggleState}>Toggle State</button>
          </LayoutElements.Column>
        )}
      </Toggle>
    </ExampleWrapper>
  </React.Fragment>
);

storiesOf('_PATTERNS', module).add('2 - Children as Function', () => (
  <ToggleStory />
));
