import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components/atoms';
import React, { SFC, useState } from 'react';
import styled from 'styled-components';
import docs from './docs.mkd';

const useCounter = (initialCount = 0) => {
  const [counter, setCounter] = useState(initialCount);
  const updateCounter = () => setCounter(counter + 1);
  return {
    counter,
    updateCounter,
  };
};

const StoryColumn = styled(LayoutElements.Column)`
  width: 300px;
`;

const CounterStory: SFC<{}> = () => {
  const { counter, updateCounter } = useCounter();
  return (
    <StoryColumn>
      <Fonts.Body1>Counter is currently at {counter}</Fonts.Body1>
      <button onClick={updateCounter}>Increment</button>
    </StoryColumn>
  );
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
  .add('4 - React Hooks', () => (
    <>
      <CounterStory key={1} />
      <CounterStory key={2} />
    </>
  ));
