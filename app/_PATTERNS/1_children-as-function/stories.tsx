import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements, Toggle } from 'components/atoms';
import React, { SFC } from 'react';
import styled from 'styled-components';
import docs from './docs.mkd';

const StoryColumn = styled(LayoutElements.Column)`
  width: 300px;
`;

const ToggleStory: SFC<{}> = () => (
  <Toggle>
    {renderProps => (
      <StoryColumn>
        <Fonts.Body1>
          Toggle is currently {renderProps.isToggled ? 'On' : 'Off'}
        </Fonts.Body1>
        <button onClick={renderProps.toggleState}>Toggle State</button>
      </StoryColumn>
    )}
  </Toggle>
);

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
  .add('1 - Children as Function', () => <ToggleStory />);
