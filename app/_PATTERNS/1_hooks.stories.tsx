import { storiesOf } from '@storybook/react';
import { Fonts } from 'components/atoms';
import React, { SFC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '../components/atoms/fonts/markdown';

const docs = `
  # Hooks
  React Hooks provide a new way of using state, specifically with functional components (SFCs).
  Hooks can be one-off, or reused across multiple components as custom Hooks.  Hooks can also
  be combined with other patterns like context to provide state for a larger component hierarchy.

  For full documentation, see [React's Hooks API](https://reactjs.org/docs/hooks-reference.html).

  ## Pattern Breakdown
  Hooks are fairly straight forward.  The \`useState\` hook provides state management while the
  \`useEffect\` hook provides lifecycle management.  Many other hooks have been created to support
  building reducers, memoized callbacks, and more.  A very basic implementation for a custom hook is
  a counter that can be incremented or decremented:

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
  To use this pattern, simply call the \`useCounter\` function within an SFC before the \`return\`
  statement:

  \`\`\`tsx
  const HooksStory: SFC<{}> = () => {
    const { counter, increment, decrement } = useCounter();
    return (
      <>
        <ReactMarkdown renderers={renderers} source={docs} />
        <Fonts.Body1>Counter is currently at {counter}</Fonts.Body1>
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
  return {
    counter,
    increment,
    decrement,
  };
};

const HooksStory: SFC<{}> = () => {
  const { counter, increment, decrement } = useCounter();
  return (
    <>
      <ReactMarkdown renderers={renderers} source={docs} />
      <Fonts.Body1>Counter is currently at {counter}</Fonts.Body1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

storiesOf('_PATTERNS', module).add('1 - React Hooks', () => <HooksStory />);
