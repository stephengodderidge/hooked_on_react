import { storiesOf } from '@storybook/react';
import React from 'react';
import { MaterialFormElements } from './';
import { Column, H1, H3, Row, Expander } from 'components';
import { materialUiTheme } from 'modules/config/material-ui-theme';
import { MuiThemeProvider } from '@material-ui/core';
import { IMaterialFormToggleElementProps } from './material';

// #region Helpers
// @ts-ignore
const onClick = (value: string, checked: boolean): null => null;
// @ts-ignore
const onChange = (value: string): null => null;

const StoryWrapper = (props: {
  label: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <Column key={props.label} padding={16}>
    <H1>{props.label}</H1>
    <Column>{props.children}</Column>
  </Column>
);

const capitalizeFirstLetter = (s: string) =>
  `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`;
// #endregion Helpers
// #region Material UI Form Elements
const generateMaterialToggleableElementStory = (
  FormElement: React.ComponentType<IMaterialFormToggleElementProps>,
  label: string,
) => (
  <StoryWrapper label={label}>
    {Object.keys(MaterialFormElements.MaterialFormElementColors).map(
      (color: keyof typeof MaterialFormElements.MaterialFormElementColors) => (
        <Row key={color} childSpacing={8}>
          <H3>{capitalizeFirstLetter(color)} Styles: </H3>
          <Expander />
          <FormElement
            value={color}
            onChange={onClick}
            color={MaterialFormElements.MaterialFormElementColors[color]}
          />
          <FormElement
            value={color}
            onChange={onClick}
            color={MaterialFormElements.MaterialFormElementColors[color]}
            disabled
          />
          <FormElement
            value={color}
            onChange={onClick}
            color={MaterialFormElements.MaterialFormElementColors[color]}
            checked
          />
          <FormElement
            value={color}
            onChange={onClick}
            color={MaterialFormElements.MaterialFormElementColors[color]}
            checked
            disabled
          />
        </Row>
      ),
    )}
  </StoryWrapper>
);

const materialCheckboxes = generateMaterialToggleableElementStory(
  MaterialFormElements.Checkbox,
  'Checkboxes',
);
const materialRadioButtons = generateMaterialToggleableElementStory(
  MaterialFormElements.RadioButton,
  'Radio Buttons',
);

const materialTextInputs = (
  <StoryWrapper label="Text Inputs">
    <Row childSpacing={8}>
      <H3>Standard States: </H3>
      <Expander />
      <MaterialFormElements.TextInput value="value" onChange={onChange} />
      <MaterialFormElements.TextInput value="value" onChange={onChange} disabled />
    </Row>
    <Row childSpacing={8}>
      <H3>Error States: </H3>
      <Expander />
      <MaterialFormElements.TextInput value="value" onChange={onChange} error />
      <MaterialFormElements.TextInput
        value="value"
        onChange={onChange}
        disabled
        error
      />
    </Row>
  </StoryWrapper>
);

const dropdownOptions = ['One', 'Two', 'Three'];
const materialDropdown = (
  <StoryWrapper label="Text Inputs">
    <Row childSpacing={8}>
      <H3>Standard States: </H3>
      <Expander />
      <MaterialFormElements.Dropdown
        value=""
        label="Material Dropdown"
        options={dropdownOptions}
        onChange={onChange}
      />
      <MaterialFormElements.Dropdown
        value="One"
        label="Material Dropdown"
        options={dropdownOptions}
        onChange={onChange}
        disabled
      />
    </Row>
  </StoryWrapper>
);
// #endregion Material UI Form Elements

storiesOf('Form Elements', module).add('Material UI', () => (
  <MuiThemeProvider theme={materialUiTheme}>
    <Column childSpacing={16}>
      {[
        materialCheckboxes,
        materialRadioButtons,
        materialTextInputs,
        materialDropdown,
      ]}
    </Column>
  </MuiThemeProvider>
));
