import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { MaterialFormElements } from './';

const onClick = jest.fn();

describe('Form Elements', () => {
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
});
