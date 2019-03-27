import { storiesOf } from '@storybook/react';
import React from 'react';
import { MaterialButtons, SemanticButtons, ReactstrapButtons } from './';
import { Column, H1, Row } from 'components';

// #region Helpers
const onClick = (): null => null;

const ButtonStoryWrapper = (props: {
  label: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <Column key={props.label} padding={16}>
    <H1>{props.label}</H1>
    <Row childSpacing={16}>{props.children}</Row>
  </Column>
);
// #endregion Helpers
// #region Material UI Buttons
const generateMaterialButtonStory = (
  Button: React.ComponentType<MaterialButtons.TMaterialButtonProps>,
  label: string,
) => (
  <ButtonStoryWrapper label={label} key={label}>
    {Object.keys(MaterialButtons.ButtonColor).map(
      (color: keyof typeof MaterialButtons.ButtonColor) => (
        <Button
          key={color}
          onClick={onClick}
          color={MaterialButtons.ButtonColor[color]}
        >
          {color} Button
        </Button>
      ),
    )}
  </ButtonStoryWrapper>
);

const generateMaterialActionButtonStory = (
  Button: React.ComponentType<MaterialButtons.TMaterialButtonProps>,
  label: string,
  extended: boolean,
) => (
  <ButtonStoryWrapper label={label} key={label}>
    {Object.keys(MaterialButtons.ButtonColor).map(
      (color: keyof typeof MaterialButtons.ButtonColor) => (
        <Button
          key={color}
          onClick={onClick}
          color={MaterialButtons.ButtonColor[color]}
          extended={extended}
        >
          {color}
          {!!extended && ' Button'}
        </Button>
      ),
    )}
  </ButtonStoryWrapper>
);

const materialPrimary = generateMaterialButtonStory(
  MaterialButtons.PrimaryButton,
  'Primary',
);
const materialSecondary = generateMaterialButtonStory(
  MaterialButtons.SecondaryButton,
  'Secondary',
);
const materialTertiary = generateMaterialButtonStory(
  MaterialButtons.TertiaryButton,
  'Tertiary',
);
const materialAction = generateMaterialActionButtonStory(
  MaterialButtons.ActionButton,
  'Action',
  false,
);
const materialExtendedAction = generateMaterialActionButtonStory(
  MaterialButtons.ActionButton,
  'Extended Action',
  true,
);
// #endregion Material UI Buttons
// #region Semantic UI Buttons
const generateSemanticButtonStory = (
  Button: React.ComponentType<SemanticButtons.ISemanticButtonProps>,
  label: string,
) => (
  <ButtonStoryWrapper label={label} key={label}>
    {Object.keys(SemanticButtons.ButtonColor).map(
      (color: keyof typeof SemanticButtons.ButtonColor) => (
        <Button
          key={color}
          onClick={onClick}
          color={SemanticButtons.ButtonColor[color]}
        >
          {color} Button
        </Button>
      ),
    )}
  </ButtonStoryWrapper>
);
const semanticPrimary = generateSemanticButtonStory(
  SemanticButtons.PrimaryButton,
  'Primary',
);
const semanticSecondary = generateSemanticButtonStory(
  SemanticButtons.SecondaryButton,
  'Secondary',
);
const semanticTertiary = generateSemanticButtonStory(
  SemanticButtons.TertiaryButton,
  'Tertiary',
);
// #endregion Semantic UI Buttons
// #region Reactstrap UI Buttons
const generateReactstrapButtonStory = (
  Button: React.ComponentType<ReactstrapButtons.IReactstrapButtonProps>,
  label: string,
) => (
  <ButtonStoryWrapper label={label} key={label}>
    {Object.keys(ReactstrapButtons.ButtonColor).map(
      (color: keyof typeof ReactstrapButtons.ButtonColor) => (
        <Button
          key={color}
          onClick={onClick}
          color={ReactstrapButtons.ButtonColor[color]}
        >
          {color} Button
        </Button>
      ),
    )}
  </ButtonStoryWrapper>
);
const reactstrapPrimary = generateReactstrapButtonStory(
  ReactstrapButtons.PrimaryButton,
  'Primary',
);
const reactstrapSecondary = generateReactstrapButtonStory(
  ReactstrapButtons.SecondaryButton,
  'Secondary',
);
// #endregion Reactstrap UI Buttons

storiesOf('Buttons', module)
  .add('Material UI', () => (
    <Column>
      {[
        materialPrimary,
        materialSecondary,
        materialTertiary,
        materialAction,
        materialExtendedAction,
      ]}
    </Column>
  ))
  .add('Semantic UI', () => (
    <Column>{[semanticPrimary, semanticSecondary, semanticTertiary]}</Column>
  ))
  .add('Reactstrap UI', () => (
    <Column>{[reactstrapPrimary, reactstrapSecondary]}</Column>
  ));
