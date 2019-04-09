import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import * as MaterialButtons from './material';
import * as SemanticButtons from './semantic';
import * as ReactstrapButtons from './reactstrap';

const onClick = jest.fn();

describe('Buttons', () => {
  afterEach(() => {
    onClick.mockClear();
  });
  // #region Material UI Button Tests
  describe('Material', () => {
    describe('Primary Button', () => {
      test('Handles onClick', () => {
        const testId = 'material-primary';
        const { getByTestId } = render(
          <MaterialButtons.PrimaryButton data-testid={testId} onClick={onClick}>
            Clickable Button
          </MaterialButtons.PrimaryButton>,
        );
        fireEvent.click(getByTestId(testId));
        expect(onClick).toHaveBeenCalledTimes(1);
      });
      test('Renders Primary Style', () => {
        const { container } = render(
          <MaterialButtons.PrimaryButton onClick={onClick}>
            Primary
          </MaterialButtons.PrimaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Primary Style - BLUE', () => {
        const { container } = render(
          <MaterialButtons.PrimaryButton
            onClick={onClick}
            color={MaterialButtons.ButtonColor.BLUE}
          >
            Primary
          </MaterialButtons.PrimaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Secondary Style', () => {
        const { container } = render(
          <MaterialButtons.SecondaryButton onClick={onClick}>
            Secondary
          </MaterialButtons.SecondaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Secondary Style - BLUE', () => {
        const { container } = render(
          <MaterialButtons.SecondaryButton
            onClick={onClick}
            color={MaterialButtons.ButtonColor.BLUE}
          >
            Secondary
          </MaterialButtons.SecondaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Tertiary Style', () => {
        const { container } = render(
          <MaterialButtons.TertiaryButton onClick={onClick}>
            Tertiary
          </MaterialButtons.TertiaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Action Style', () => {
        const { container } = render(
          <MaterialButtons.ActionButton onClick={onClick}>
            Action
          </MaterialButtons.ActionButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Action Style - BLUE', () => {
        const { container } = render(
          <MaterialButtons.ActionButton
            onClick={onClick}
            color={MaterialButtons.ButtonColor.BLUE}
          >
            Action
          </MaterialButtons.ActionButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Extended Action Style', () => {
        const { container } = render(
          <MaterialButtons.ActionButton extended onClick={onClick}>
            Extended Action
          </MaterialButtons.ActionButton>,
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
  // #endregion Material UI Button Tests
  // #region Semantic UI Button Tests
  describe('Semantic', () => {
    describe('Primary Button', () => {
      test('Handles onClick', () => {
        const testId = 'semantic-primary';
        const { getByTestId } = render(
          <SemanticButtons.PrimaryButton data-testid={testId} onClick={onClick}>
            Clickable Button
          </SemanticButtons.PrimaryButton>,
        );
        fireEvent.click(getByTestId(testId));
        expect(onClick).toHaveBeenCalledTimes(1);
      });
      test('Renders Primary Style', () => {
        const { container } = render(
          <SemanticButtons.PrimaryButton onClick={onClick}>
            Primary
          </SemanticButtons.PrimaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Secondary Style', () => {
        const { container } = render(
          <SemanticButtons.SecondaryButton onClick={onClick}>
            Secondary
          </SemanticButtons.SecondaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Tertiary Style', () => {
        const { container } = render(
          <SemanticButtons.TertiaryButton onClick={onClick}>
            Tertiary
          </SemanticButtons.TertiaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
  // #endregion Semantic UI Button Tests
  // #region Reactstrap UI Button Tests
  describe('Reactstrap', () => {
    describe('Primary Button', () => {
      test('Handles onClick', () => {
        const testId = 'reactstrap-primary';
        const { getByTestId } = render(
          <ReactstrapButtons.PrimaryButton data-testid={testId} onClick={onClick}>
            Clickable Button
          </ReactstrapButtons.PrimaryButton>,
        );
        fireEvent.click(getByTestId(testId));
        expect(onClick).toHaveBeenCalledTimes(1);
      });
      test('Renders Primary Style', () => {
        const { container } = render(
          <ReactstrapButtons.PrimaryButton onClick={onClick}>
            Primary
          </ReactstrapButtons.PrimaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
      test('Renders Secondary Style', () => {
        const { container } = render(
          <ReactstrapButtons.SecondaryButton onClick={onClick}>
            Secondary
          </ReactstrapButtons.SecondaryButton>,
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
  // #endregion Reactstrap UI Button Tests
});
