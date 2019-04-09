import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { MaterialFormElements } from '..';

const onClick = jest.fn();

describe('Form Elements - Material', () => {
  afterEach(() => {
    onClick.mockClear();
  });
  // #region Checkbox
  describe('Checkbox', () => {
    test('Renders', () => {
      const { container } = render(
        <MaterialFormElements.Checkbox onChange={onClick} value="" />,
      );
      expect(container).toMatchSnapshot();
    });
    test('Handles Click', () => {
      const testId = 'checkbox';
      const { getByTestId } = render(
        <MaterialFormElements.Checkbox
          onChange={onClick}
          value=""
          data-testid={testId}
        />,
      );
      expect(getByTestId(testId).className.includes('checked')).toBe(false);
      fireEvent.click(getByTestId(testId).querySelector('input'));
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(getByTestId(testId).className.includes('checked')).toBe(true);
    });
  });
  // #endregion Checkbox
  // #region Radio Button
  describe('Radio Button', () => {
    test('Renders', () => {
      const { container } = render(
        <MaterialFormElements.RadioButton onChange={onClick} value="" />,
      );
      expect(container).toMatchSnapshot();
    });
    test('Handles Click', () => {
      const testId = 'radio-button';
      const { getByTestId } = render(
        <MaterialFormElements.RadioButton
          onChange={onClick}
          value=""
          data-testid={testId}
        />,
      );
      expect(getByTestId(testId).className.includes('checked')).toBe(false);
      fireEvent.click(getByTestId(testId).querySelector('input'));
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(getByTestId(testId).className.includes('checked')).toBe(true);
    });
  });
  // #endregion Radio Button
  // #region Radio Button
  describe('Text Input', () => {
    test('Renders', () => {
      const { container } = render(
        <MaterialFormElements.TextInput onChange={onClick} value="" />,
      );
      expect(container).toMatchSnapshot();
    });
    test('Handles User Input', () => {
      const testId = 'radio-button';
      const testValue = 'Input test';
      const { getByTestId } = render(
        <MaterialFormElements.TextInput
          onChange={onClick}
          value=""
          data-testid={testId}
        />,
      );
      fireEvent.change(getByTestId(testId).getElementsByTagName('input')[0], {
        target: { value: testValue },
      });
      expect(getByTestId(testId).getElementsByTagName('input')[0].value).toBe(
        testValue,
      );
    });
  });
  // #endregion Radio Button
});
