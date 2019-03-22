import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import {
  Display1,
  Display2,
  Display3,
  H1,
  H2,
  H3,
  H4,
  Body1,
  Body2,
  Body3,
  Link1,
  Link2,
  Link3,
  Label,
} from 'components';
import React from 'react';
import ReactMarkdown from 'react-markdown';
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
    <Display1>Display 1</Display1>
    <Display2>Display 2</Display2>
    <Display3>Display 3</Display3>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <Body1>Body 1</Body1>
    <Body2>Body 2</Body2>
    <Body3>Body 3</Body3>
    <Link1>Link 1</Link1>
    <Link2>Link 2</Link2>
    <Link3>Link 3</Link3>
    <Label>Label</Label>
  </React.Fragment>
);

storiesOf('Fonts', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: ``,
      source: false,
      header: false,
      propTables: [],
      propTablesExclude: [
        Display1,
        Display2,
        Display3,
        H1,
        H2,
        H3,
        H4,
        Body1,
        Body2,
        Body3,
        Link1,
        Link2,
        Link3,
        Label,
        React.Fragment,
      ],
      inline: true,
    },
  })
  .add('Markdown', () => markdownFonts)
  .add('Standard Fonts', () => standardFonts);
