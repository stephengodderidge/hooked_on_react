import { storiesOf } from '@storybook/react';
import { Body1 } from 'components/atoms';
import React, { SFC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from 'components/atoms/fonts/markdown';
import { ExampleWrapper } from './shared-components';

const docs = `
  # Hooks
  React Hooks provide a new way of using local state, specifically with functional components
  (SFCs).  A Hook can be one-off, or reused across multiple components as a custom Hook.  Hooks
  can also be combined with other patterns like context to provide state for a larger component
  hierarchy.

  For full documentation, see [React's Hooks API](https://reactjs.org/docs/hooks-reference.html).

  ## Pattern Breakdown
  The most commonly used hooks are \`useState\` and \`useEffect\`.  \`useState\` provides local
  state management and \`useEffect\` provides lifecycle management.  Many other hooks have been
  created to support building reducers, memoized callbacks, and more.  A custom hook that manages
  a quantity that can be incremented or decremented might be implemented in this way:

  \`\`\`tsx
  const useCounter = (initialCount = 0) => {
    const [counter, setCounter] = useState(initialCount);
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    return {
      counter,
      increment,
      decrement,
    };
  };
  \`\`\`

  ## Pattern Usage
  To use this custom hook, call the \`useCounter\` function within an SFC before the \`return\`
  statement:

  \`\`\`tsx
  const HooksStory: SFC<{}> = () => {
    const { counter, increment, decrement } = useCounter();
    return (
      <>
        <BodyFont>Counter is currently at {counter}</BodyFont>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </>
    );
  };
  \`\`\`

  ## Example Implementation - Custom Counter Hook
`;

const useCounter = (initialCount = 0) => {
  const [counter, setCounter] = useState(initialCount);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const setTo10 = () => setCounter(10);
  return {
    counter,
    increment,
    decrement,
    setTo10,
  };
};

const HooksStory: SFC<{}> = () => {
  const { counter, increment, decrement, setTo10 } = useCounter();
  return (
    <>
      <ReactMarkdown renderers={renderers} source={docs} />
      <ExampleWrapper>
        <Body1>Counter is currently at {counter}</Body1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={setTo10}>Set to 10</button>
      </ExampleWrapper>
    </>
  );
};

storiesOf('_PATTERNS', module).add('1 - React Hooks', () => <HooksStory />);
