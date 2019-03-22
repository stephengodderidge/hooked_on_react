import { render } from 'react-testing-library';
import { InjectElement, Spacer, Column, Row, JustifyContent, BgColor } from './';
import React from 'react';

const getChildren = () => (
  <>
    <div key={1}>One</div>
    <div key={2}>Two</div>
    <div key={3}>Three</div>
  </>
);

const getColumn = (
  justification: JustifyContent = null,
  childSpacing: number = 0,
  bgColor: BgColor = null,
) => (
  <Column
    justifyContent={justification}
    childSpacing={childSpacing}
    bgColor={bgColor}
  >
    {getChildren()}
  </Column>
);

const getRow = (
  justification: JustifyContent = null,
  childSpacing: number = 0,
  bgColor: BgColor = null,
) => (
  <Row justifyContent={justification} childSpacing={childSpacing} bgColor={bgColor}>
    {getChildren()}
  </Row>
);

describe('Layout Atoms', () => {
  describe('Inject Element', () => {
    test('Injects Correct Number of Elements', () => {
      const { getAllByTestId } = render(
        <InjectElement element={<hr data-testid="hr" />}>
          <div key={1}>hello</div>
          <div key={2}>hello</div>
          <div key={3}>hello</div>
        </InjectElement>,
      );
      expect(getAllByTestId('hr').length).toEqual(2);
    });
  });

  describe('Spacer', () => {
    test('Renders Width', () => {
      const { container } = render(<Spacer width={16} />);
      expect(container).toMatchSnapshot();
    });
    test('Renders Height', () => {
      const { container } = render(<Spacer height={16} />);
      expect(container).toMatchSnapshot();
    });
    test('Renders Width + Height', () => {
      const { container } = render(<Spacer width={16} height={16} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Column', () => {
    test('Renders Column', () => {
      const { container } = render(getColumn());
      expect(container).toMatchSnapshot();
    });
    test('Renders Column with Child Spacing', () => {
      const { container } = render(getColumn(null, 16, null));
      expect(container).toMatchSnapshot();
    });
    test('Renders Column with Background Color - WHITE', () => {
      const { container } = render(getColumn(null, 16, BgColor.WHITE));
      expect(container).toMatchSnapshot();
    });
    test('Renders Column with Background Color - GREY', () => {
      const { container } = render(getColumn(null, 16, BgColor.GREY));
      expect(container).toMatchSnapshot();
    });
    test('Renders Column with Background Color - BLUE', () => {
      const { container } = render(getColumn(null, 16, BgColor.BLUE));
      expect(container).toMatchSnapshot();
    });
    test('Renders Column with Content Justification - START', () => {
      const { container } = render(getColumn(JustifyContent.START));
      expect(container).toMatchSnapshot();
    });
    test('Renders Column with Content Justification - CENTER', () => {
      const { container } = render(getColumn(JustifyContent.CENTER));
      expect(container).toMatchSnapshot();
    });
    test('Renders Column with Content Justification - END', () => {
      const { container } = render(getColumn(JustifyContent.END));
      expect(container).toMatchSnapshot();
    });
  });

  describe('Row', () => {
    test('Renders Row', () => {
      const { container } = render(getRow());
      expect(container).toMatchSnapshot();
    });
    test('Renders Row with Child Spacing', () => {
      const { container } = render(getRow(null, 16, null));
      expect(container).toMatchSnapshot();
    });
    test('Renders Row with Background Color - WHITE', () => {
      const { container } = render(getRow(null, 16, BgColor.WHITE));
      expect(container).toMatchSnapshot();
    });
    test('Renders Row with Background Color - GREY', () => {
      const { container } = render(getRow(null, 16, BgColor.GREY));
      expect(container).toMatchSnapshot();
    });
    test('Renders Row with Background Color - BLUE', () => {
      const { container } = render(getRow(null, 16, BgColor.BLUE));
      expect(container).toMatchSnapshot();
    });
    test('Renders Row with Content Justification - START', () => {
      const { container } = render(getRow(JustifyContent.START));
      expect(container).toMatchSnapshot();
    });
    test('Renders Row with Content Justification - CENTER', () => {
      const { container } = render(getRow(JustifyContent.CENTER));
      expect(container).toMatchSnapshot();
    });
    test('Renders Row with Content Justification - END', () => {
      const { container } = render(getRow(JustifyContent.END));
      expect(container).toMatchSnapshot();
    });
  });
});
