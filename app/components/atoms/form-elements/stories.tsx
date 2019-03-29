import { storiesOf } from '@storybook/react';
import React from 'react';
import { MaterialFormElements } from './';
import { Column, H1, H3, Row } from 'components';
import { materialUiTheme } from 'modules/config/material-ui-theme';
import { MuiThemeProvider } from '@material-ui/core';
import { ISharedMaterialFormElementProps } from './material';

// #region Helpers
const onClick = (value: string, checked: boolean): null => null;

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
const generateMaterialCheckboxStory = (
  FormElement: React.ComponentType<ISharedMaterialFormElementProps>,
  label: string,
) => (
  <StoryWrapper label={label}>
    {Object.keys(MaterialFormElements.MaterialFormElementColors).map(
      (color: keyof typeof MaterialFormElements.MaterialFormElementColors) => (
        <Row key={color} childSpacing={8}>
          <H3>{capitalizeFirstLetter(color)} Styles: </H3>
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

const materialCheckboxes = generateMaterialCheckboxStory(
  MaterialFormElements.Checkbox,
  'Checkboxes',
);
const materialRadioButtons = generateMaterialCheckboxStory(
  MaterialFormElements.RadioButton,
  'RadioButtons',
);
// #endregion Material UI Form Elements

storiesOf('Form Elements', module).add('Material UI', () => (
  <MuiThemeProvider theme={materialUiTheme}>
    <Column childSpacing={16}>{[materialCheckboxes, materialRadioButtons]}</Column>
  </MuiThemeProvider>
));
