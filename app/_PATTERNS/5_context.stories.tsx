import { storiesOf } from '@storybook/react';
import { LayoutElements } from 'components/atoms';
import React, { Component, SFC } from 'react';
// import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
// import { renderers } from '../components/atoms/fonts/markdown';

const initialState = {
  count: 0,
  text: '',
};

const StoryContext = React.createContext(initialState);

const StoryColumn = styled(LayoutElements.Column)`
  width: 300px;
`;

const StoryRow = styled(LayoutElements.Row)`
  justify-content: space-between;
`;

interface IButtonClickCounterProps {
  onClick: () => void;
}

const ButtonClickCounter: SFC<IButtonClickCounterProps> = props => (
  <StoryContext.Consumer>
    {({ count }) => (
      <>
        <button onClick={props.onClick}>Increment</button>
        {count}
      </>
    )}
  </StoryContext.Consumer>
);

interface ITextTracker {
  onChange: (text: string) => void;
}

const TextTracker: SFC<ITextTracker> = props => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.value);
  return (
    <StoryContext.Consumer>
      {({ text }) => (
        <>
          <input type="text" onChange={onChange} value={text} />
          {text}
        </>
      )}
    </StoryContext.Consumer>
  );
};

class ContextStory extends Component<{}> {
  state = initialState;
  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  updateText = (text: string) => {
    this.setState({ text });
  };
  render() {
    return (
      <StoryColumn>
        <StoryContext.Provider value={this.state}>
          <StoryRow>
            <ButtonClickCounter onClick={this.updateCount} />
          </StoryRow>
          <StoryRow>
            <TextTracker onChange={this.updateText} />
          </StoryRow>
        </StoryContext.Provider>
      </StoryColumn>
    );
  }
}

storiesOf('_PATTERNS', module).add('5 - React Context', () => <ContextStory />);
