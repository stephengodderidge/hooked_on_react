import React from 'react';
import { render } from 'react-testing-library';
import * as Fonts from './';

describe('Fonts', () => {
  test('Renders Font Boldnesses', () => {
    const { container } = render(
      <>
        <Fonts.Body1 boldness={Fonts.BoldnessLevels.LIGHT}>
          Light Boldness
        </Fonts.Body1>
        <Fonts.Body1 boldness={Fonts.BoldnessLevels.MEDIUM}>
          Medium Boldness
        </Fonts.Body1>
        <Fonts.Body1 boldness={Fonts.BoldnessLevels.BOLD}>Bold Boldness</Fonts.Body1>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
  test('Render Font Colors', () => {
    const { container } = render(
      <>
        <Fonts.Body1 color={Fonts.FontColor.WHITE}>White Font Color</Fonts.Body1>
        <Fonts.Body1 color={Fonts.FontColor.BLACK}>Black Font Color</Fonts.Body1>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
  test('Renders Display Fonts', () => {
    const { container } = render(
      <>
        <Fonts.Display1>Display 1</Fonts.Display1>
        <Fonts.Display2>Display 2</Fonts.Display2>
        <Fonts.Display3>Display 3</Fonts.Display3>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
  test('Renders Heading Fonts', () => {
    const { container } = render(
      <>
        <Fonts.H1>H 1</Fonts.H1>
        <Fonts.H2>H 2</Fonts.H2>
        <Fonts.H3>H 3</Fonts.H3>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
  test('Renders Body Fonts', () => {
    const { container } = render(
      <>
        <Fonts.Body1>Body 1</Fonts.Body1>
        <Fonts.Body2>Body 2</Fonts.Body2>
        <Fonts.Body3>Body 3</Fonts.Body3>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
  /** TODO - Include test once issue w/ theme colors is resolved */
  // test('Renders Link Fonts', () => {
  //   const { container } = render(
  //     <>
  //       <Fonts.Link1 linkUrl="">Link 1</Fonts.Link1>
  //       <Fonts.Link2 linkUrl="">Link 2</Fonts.Link2>
  //       <Fonts.Link3 linkUrl="">Link 3</Fonts.Link3>
  //     </>,
  //   );
  //   expect(container).toMatchSnapshot();
  // });
  test('Renders Label Fonts', () => {
    const { container } = render(
      <>
        <Fonts.Label>Label</Fonts.Label>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
});
