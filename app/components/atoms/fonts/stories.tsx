import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Fonts } from 'components/atoms';
import React, { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { IFontProps } from '.';
import { renderers } from './markdown';

const content = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4

---

paragraph

**bold paragraph**

_italic paragraph_
`;

const markdownFonts = <ReactMarkdown source={content} renderers={renderers} />;
const standardFonts = (
  <React.Fragment>
    <Fonts.Display1>Display 1</Fonts.Display1>
    <Fonts.Display2>Display 2</Fonts.Display2>
    <Fonts.Display3>Display 3</Fonts.Display3>
    <Fonts.H1>Heading 1</Fonts.H1>
    <Fonts.H2>Heading 2</Fonts.H2>
    <Fonts.H3>Heading 3</Fonts.H3>
    <Fonts.H4>Heading 4</Fonts.H4>
    <Fonts.Body1>Body 1</Fonts.Body1>
    <Fonts.Body2>Body 2</Fonts.Body2>
    <Fonts.Body3>Body 3</Fonts.Body3>
    <Fonts.Link1>Link 1</Fonts.Link1>
    <Fonts.Link2>Link 2</Fonts.Link2>
    <Fonts.Link3>Link 3</Fonts.Link3>
    <Fonts.Label>Label</Fonts.Label>
  </React.Fragment>
);

const FontProps: SFC<IFontProps> = () => <div />;

storiesOf('Fonts', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: ``,
      source: false,
      header: false,
      propTables: [FontProps],
      propTablesExclude: [
        Fonts.Display1,
        Fonts.Display2,
        Fonts.Display3,
        Fonts.H1,
        Fonts.H2,
        Fonts.H3,
        Fonts.H4,
        Fonts.Body1,
        Fonts.Body2,
        Fonts.Body3,
        Fonts.Link1,
        Fonts.Link2,
        Fonts.Link3,
        Fonts.Label,
        React.Fragment,
      ],
      inline: true,
    },
  })
  .add('Markdown', () => markdownFonts)
  .add('Standard Fonts', () => standardFonts);
