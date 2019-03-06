import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components/atoms';
import React, { SFC, useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '../components/atoms/fonts/markdown';
import { ExampleWrapper } from './shared-components';

const docs = `
  # Context
  React Context provides a way to share stateful data across many layers of components without
  having to explicitly pass props through each level.  Context is most useful when a component
  hierarchy is more than 3 levels deep and stateful data must be passed or maintained through
  each level.

  ## Pattern Breakdown
  To use Context, it must first be created using React's top-level API method \`createContext\`.
  The value passed to this method can be any valid JSON structure or JS primitive:

  \`\`\`tsx
  const initialState = {
    count: 0,
    increment: (): void => null,
  };
  
  const CounterContext = React.createContext(initialState);
  \`\`\`

  \`createContext\` will return an object with two components: \`Provider\` & \`Consumer\`. The
  \`Provider\` is used to provide access to a parent's state or helper methods.  The \`Consumer\`
  is used by children to access the parent's context directly, without having to be explicitly
  passed from one component to the next.

  \`\`\`tsx
  const ContextProvider: SFC<{}> = props => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
      <Column>
        <CounterContext.Provider value={{ count, increment }}>
          {props.children}
        </CounterContext.Provider>
      </Column>
    );
  };
  \`\`\`

  ## Pattern Usage
  There are two ways for a child to access its parent's conext: using \`Context.Consumer\` or the
  new \`useContext\` hook.  Latest best practices recommend using the \`useContext\` hook which will
  return the current object being passed to the \`Context.Provider\`'s \`value\` prop in the parent:

  \`\`\`tsx
  const ButtonClickCounter: SFC<{}> = () => {
    const { increment } = useContext(CounterContext);
    return <button onClick={increment}>Increment</button>;
  };
  
  const CountDisplay: SFC<{}> = () => {
    const { count } = useContext(CounterContext);
    return <BodyFont>Button has been clicked {count} times</BodyFont>;
  };
  \`\`\`

  To tie everything together, nest the children that use the \`useContext\` hook within the provider
  component:

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
      <ExampleWrapper>
        <ContextProvider>
          <ButtonClickCounter />
          <CountDisplay />
        </ContextProvider>
      </ExampleWrapper>
    </>
  );
};

storiesOf('_PATTERNS', module).add('5 - React Context', () => <ContextStory />);
