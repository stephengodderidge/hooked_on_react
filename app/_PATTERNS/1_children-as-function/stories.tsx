import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements, Toggle } from 'components/atoms';
import React, { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '../../components/atoms/fonts/markdown';

const docs = `
  The **Children as a Function** pattern is most commonly referred to as **Render Props** and
  is generally preferred over a similar pattern called **Higher Order Components**.

  Render Props provide a flexible way of applying the same local state to multiple independent
  components.  It also allows each component to vary in how that local state is used.

  ## Pattern Breakdown
  The \`Toggle\` component uses another pattern called hooks to manage its state.
  See documentation on hooks for more information.  Because the \`Toggle\` component
  expects its children to be a function, we can call \`props.children\` as such and
  pass it any parameters we want.  In this case, we pass the current boolean value
  of \`isToggled\` and a callback that will update the value of \`isToggled\`:

  \`\`\`tsx
  export const Toggle: SFC<IToggleProps> = props => {
    const [isToggled, setToggle] = useState(props.defaultOn || false);
  
    const toggleState = () => {
      setToggle(!isToggled);
    };
  
    return props.children({ isToggled, toggleState });
  };
  \`\`\`

  ## Pattern Usage
  \`\`\`
    <Toggle>
      {({ isToggled, toggleState }) => (
        {...}
      )}
    </Toggle>
  \`\`\`

  ## Example Implementation - On / Off Toggle
`;

const ToggleStory: SFC<{}> = () => (
  <React.Fragment>
    <ReactMarkdown renderers={renderers} source={docs} />
    <Toggle>
      {({ isToggled, toggleState }) => (
        <LayoutElements.Column>
          <Fonts.Body1>Toggle is currently {isToggled ? 'on' : 'off'}</Fonts.Body1>
          <button onClick={toggleState}>Toggle State</button>
        </LayoutElements.Column>
      )}
    </Toggle>
  </React.Fragment>
);

storiesOf('_PATTERNS', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      source: false,
      header: false,
      propTables: [Toggle],
      propTablesExclude: [ToggleStory],
      inline: true,
    },
  })
  .add('1 - Children as Function', () => <ToggleStory />);
