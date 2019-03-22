import { storiesOf } from '@storybook/react';
import React, { SFC, useState } from 'react';
import { Checkbox, Dropdown, RadioButton, TextInput } from './';

// @ts-ignore
const onChange = (value: string): null => null;

const options = ['Athleta', 'Banana Republic', 'Gap', 'Old Navy'];

const StoryDropdown: SFC<{
  value: string;
  disabled?: boolean;
  placeholder: string;
  options: string[];
}> = props => {
  const [value, setValue] = useState(props.value);
  return <Dropdown {...props} onChange={setValue} value={value} />;
};

const StoryTextInput: SFC<{
  value: string;
  disabled: boolean;
  placeholder: string;
}> = props => {
  const [value, setValue] = useState(props.value);
  return <TextInput {...props} onChange={setValue} value={value} />;
};

storiesOf('Form Elements', module).add('All', () => (
  <>
    <Checkbox onChange={onChange} value="Something" />
    <Checkbox onChange={onChange} value="" disabled />
    <RadioButton onChange={onChange} value="Sup" />
    <RadioButton onChange={onChange} value="" disabled />
    <StoryDropdown options={options} value="" placeholder="Select an option" />
    <StoryTextInput value="" disabled={false} placeholder="hi" />
    <StoryTextInput value="" disabled={true} placeholder="hi" />
  </>
));
