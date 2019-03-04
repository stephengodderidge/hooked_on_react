import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components/atoms';
import React, { SFC, useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '../components/atoms/fonts/markdown';

const docs = `
  # Context
  React Context provides a way to share stateful data across many layers of components without
  having to explicitly pass props through each level.  Much like how Redux's \`connect\` HOC
  allows individual components at any level to access the global Redux store, context Consumers
  have access to a shared state which is managed by a context Provider component

  ## Pattern Breakdown
  First, a context must be created using React's top-level API method \`createContext\`.  The
  value passed to this method can be any valid JSON structure.

  \`\`\`tsx
  const initialState = {
    count: 0,
    increment: (): void => null,
  };
  
  const CounterContext = React.createContext(initialState);
  \`\`\`

  Next, a parent component must use \`CounterContext.Provider\` to wrap its children.  This
  component will generally require local state as well, so the \`useState\` hook will
  frequently be used with this pattern:

  \`\`\`tsx
  const ContextProvider: SFC<{}> = props => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
      <LayoutElements.Column>
        <CounterContext.Provider value={{ count, increment }}>
          {props.children}
        </CounterContext.Provider>
      </LayoutElements.Column>
    );
  };
  \`\`\`

  ## Pattern Usage
  To use this pattern, a child being passed as a child to the \`ContextProvider\` component
  must use the \`useContext\` hook and pass the appropriate Context as an argument.  The returned
  object will match the \`initialState\` object originally passed to \`createContext\`, although,
  with object destructuring, specific fields can be parsed out:

  \`\`\`tsx
  const ButtonClickCounter: SFC<{}> = () => {
    const { increment } = useContext(CounterContext);
    return <button onClick={increment}>Increment</button>;
  };
  
  const CountDisplay: SFC<{}> = () => {
    const { count } = useContext(CounterContext);
    return <Fonts.H1>Button has been clicked {count} times</Fonts.H1>;
  };
  \`\`\`

  To tie everything together, nest the components that use the \`useContext\` hook within the
  provider component:

  \`\`\`tsx
  <ContextProvider>
    <ButtonClickCounter />
    <CountDisplay />
  </ContextProvider>
  \`\`\`

  ## Example Implementation - Custom Counter Hook
`;

const initialState = {
  count: 0,
  increment: (): void => null,
};

const CounterContext = React.createContext(initialState);

const ButtonClickCounter: SFC<{}> = () => {
  const { increment } = useContext(CounterContext);
  return <button onClick={increment}>Increment</button>;
};

const CountDisplay: SFC<{}> = () => {
  const { count } = useContext(CounterContext);
  return <Fonts.H1>Button has been clicked {count} times</Fonts.H1>;
};

const ContextProvider: SFC<{}> = props => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <LayoutElements.Column>
      <CounterContext.Provider value={{ count, increment }}>
        {props.children}
      </CounterContext.Provider>
    </LayoutElements.Column>
  );
};

const ContextStory: SFC<{}> = () => {
  return (
    <>
      <ReactMarkdown renderers={renderers} source={docs} />
      <ContextProvider>
        <ButtonClickCounter />
        <CountDisplay />
      </ContextProvider>
    </>
  );
};

storiesOf('_PATTERNS', module).add('5 - React Context', () => <ContextStory />);
