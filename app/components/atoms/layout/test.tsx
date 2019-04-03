import React from 'react';
import { render } from 'react-testing-library';
import {
  Row,
  Column,
  InjectElement,
  Spacer,
  JustifyContent,
  LayoutBgColor,
} from '.';
import { Expander } from './expander';

describe('Layout', () => {
  // #region Row
  describe('Row', () => {
    test('Renders', () => {
      const { container } = render(
        <Row>
          <div>Element 1</div>
          <div>Element 2</div>
        </Row>,
      );
      expect(container).toMatchSnapshot();
    });
    test('Renders Evenly Spaced Children', () => {
      const { container } = render(
        <Row childSpacing={16}>
          <div>Element 1</div>
          <div>Element 2</div>
        </Row>,
      );
      expect(container).toMatchSnapshot();
    });
    test('Renders - One of Each - Content Justification', () => {
      const oneOfEach = Object.keys(JustifyContent).map(
        (bgColor: keyof typeof JustifyContent) => (
          <Row justifyContent={JustifyContent[bgColor]} key={bgColor}>
            <div>Element 1</div>
            <div>Element 2</div>
          </Row>
        ),
      );
      const { container } = render(<>{oneOfEach}</>);
      expect(container).toMatchSnapshot();
    });
    test('Renders - One of Each - LayoutBgColor', () => {
      const oneOfEach = Object.keys(LayoutBgColor).map(
        (bgColor: keyof typeof LayoutBgColor) => (
          <Row bgColor={LayoutBgColor[bgColor]} key={bgColor}>
            <div>Element 1</div>
            <div>Element 2</div>
          </Row>
        ),
      );
      const { container } = render(<>{oneOfEach}</>);
      expect(container).toMatchSnapshot();
    });
  });
  // #endregion Row
  // #region Column
  describe('Column', () => {
    test('Renders', () => {
      const { container } = render(
        <Column>
          <div>Element 1</div>
          <div>Element 2</div>
        </Column>,
      );
      expect(container).toMatchSnapshot();
    });
    test('Renders Evenly Spaced Children', () => {
      const { container } = render(
        <Column childSpacing={16}>
          <div>Element 1</div>
          <div>Element 2</div>
        </Column>,
      );
      expect(container).toMatchSnapshot();
    });
    test('Renders - One of Each - Content Justification', () => {
      const oneOfEach = Object.keys(JustifyContent).map(
        (bgColor: keyof typeof JustifyContent) => (
          <Row justifyContent={JustifyContent[bgColor]} key={bgColor}>
            <div>Element 1</div>
            <div>Element 2</div>
          </Row>
        ),
      );
      const { container } = render(<>{oneOfEach}</>);
      expect(container).toMatchSnapshot();
    });
    test('Renders - One of Each - LayoutBgColor', () => {
      const oneOfEach = Object.keys(LayoutBgColor).map(
        (bgColor: keyof typeof LayoutBgColor) => (
          <Row bgColor={LayoutBgColor[bgColor]} key={bgColor}>
            <div>Element 1</div>
            <div>Element 2</div>
          </Row>
        ),
      );
      const { container } = render(<>{oneOfEach}</>);
      expect(container).toMatchSnapshot();
    });
  });
  // #endregion Column
  // #region Inject Element
  describe('Inject Element', () => {
    test('Renders', () => {
      const { container } = render(
        <InjectElement element={<div />}>
          <div>Element 1</div>
          <div>Element 2</div>
          <div>Element 3</div>
        </InjectElement>,
      );
      expect(container).toMatchSnapshot();
    });
    test('Injects Elements', () => {
      const testId = 'injected-div';
      const { getAllByTestId } = render(
        <InjectElement element={<div data-testid={testId} />}>
          <div>Element 1</div>
          <div>Element 2</div>
          <div>Element 3</div>
        </InjectElement>,
      );
      expect(getAllByTestId(testId).length).toEqual(2);
    });
  });
  // #endregion Inject Element
  // #region Spacer
  describe('Spacer', () => {
    test('Renders w/ Width', () => {
      const { container } = render(<Spacer width={16} />);
      expect(container).toMatchSnapshot();
    });
    test('Renders w/ Height', () => {
      const { container } = render(<Spacer height={16} />);
      expect(container).toMatchSnapshot();
    });
    test('Renders w/ Width + Height', () => {
      const { container } = render(<Spacer width={16} height={16} />);
      expect(container).toMatchSnapshot();
    });
  });
  // #endregion Spacer
  // #region Expander
  describe('Expander', () => {
    test('Renders w/ Width', () => {
      const { container } = render(<Expander />);
      expect(container).toMatchSnapshot();
    });
  });
  // #endregion Expander
});
