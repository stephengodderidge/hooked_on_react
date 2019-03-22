import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, ButtonColor } from './';

const onClick = (): null => null;

storiesOf('Buttons', module).add('All', () => (
  <>
    <Button onClick={onClick}>OK</Button>
    <Button onClick={onClick} bgColor={ButtonColor.ALT_PRIMARY}>
      Submit
    </Button>
    <Button onClick={onClick} bgColor={ButtonColor.SECONDARY}>
      Continue
    </Button>
    <Button onClick={onClick} bgColor={ButtonColor.TERTIARY}>
      Cancel
    </Button>
  </>
));
