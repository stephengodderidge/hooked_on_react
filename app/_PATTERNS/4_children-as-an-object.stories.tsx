import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components';
import React, { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { renderers } from '../components/atoms/fonts/markdown';
import { ExampleWrapper } from './shared-components';

const docs = `
  # Children as an Object
  The **Children as an Object** pattern is less common and serves as an example of a pattern with
  very specific, but important, use-cases.
  
  The two most common use-cases for this pattern are called **Data Projection** and **Named Slots**.
  **Data Projection** focuses on data-driven views and where data dictates which components are
  shown or hidden.  **Named Slots** focuses on templated layouts where specific components are fit
  into *named slots* in various configurations.

  ## Pattern Breakdown
  In the same way a component's children can be defined as a function, array, or JS primitive,
  children may also be defined as an object.  This \`NamedSlotsLayout\` component demonstrates how
  *named slots* can be used to define a layout that can be reused in multiple ways:

  \`\`\`tsx
  const NamedSlotsLayout: SFC<INamedSlotsLayoutProps> = props => {
    const { Top, Bottom, Right } = props.children;
    return (
      <Row>
        <LeftSection>
          {Top || null}
          <Hr />
          {Bottom || null}
        </LeftSection>
        {Right || null}
      </Row>
    );
  };
  \`\`\`

  ## Pattern Usage
  To use this pattern, define the children of the \`NamedSlotsLayout\` component as an object
  that matches the interface definition \`NameSlotLayout\`'s children:

  \`\`\`tsx
  <NamedSlotsLayout>
    {{
      Top: <div>Top Component</div>,
      Bottom: <div>Bottom Component</div>,
      Right: <div>Right Component</div>,
    }}
  </NamedSlotsLayout>
  \`\`\`

  will yield:
`;

const docs2 = `
  A more complex example with custom components might look something like this:
  \`\`\`tsx
  <NamedSlotsLayout>
    {{
      Top: <BrandComponent {...brand} />,
      Bottom: <MarketComponent {...market} />,
      Right: (
        <Column>
          {['One', 'Two', 'Three'].map(s => (
            <BodyFont key={s}>{s}</BodyFont>
          ))}
        </Column>
      ),
    }}
  </NamedSlotsLayout>
  \`\`\`

  will yield:
`;

const FiltersWrapper = styled(LayoutElements.PaddedColumn)`
  background-color: ${props => props.theme.colors.grey1};
`;

const Hr = styled.hr`
  border-style: solid;
  border: 1px solid ${props => props.theme.colors.black};
  margin: 16px 8px;
`;

interface IFilter {
  selected: string | string[];
  options: string[];
}

const BrandComponent: SFC<IFilter> = props => (
  <LayoutElements.Column>
    <Fonts.H1>Brand</Fonts.H1>
    <select>
      {props.options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </LayoutElements.Column>
);

const MarketComponent: SFC<IFilter> = props => (
  <LayoutElements.Column>
    <Fonts.H1>Market</Fonts.H1>
    <LayoutElements.RowWithPadding>
      {props.options.map(option => (
        <React.Fragment key={option}>
          <input type="checkbox" value={option} name={option} />
          <label htmlFor={option}>{option}</label>
        </React.Fragment>
      ))}
    </LayoutElements.RowWithPadding>
  </LayoutElements.Column>
);

interface INamedSlotsLayoutProps {
  children: {
    Top: JSX.Element;
    Bottom: JSX.Element;
    Right: JSX.Element;
  };
}

const NamedSlotsLayout: SFC<INamedSlotsLayoutProps> = props => {
  const { Top, Bottom, Right } = props.children;
  return (
    <LayoutElements.Row>
      <FiltersWrapper>
        {Top || null}
        <Hr />
        {Bottom || null}
      </FiltersWrapper>
      {Right || null}
    </LayoutElements.Row>
  );
};

const brand = {
  selected: 'Banana Republic',
  options: ['Banana Republic', 'Gap', 'Old Navy'],
};

const market = {
  selected: ['US', 'Canada'],
  options: ['US', 'Canada', 'Japan'],
};

const basicExample = (
  <ExampleWrapper>
    <NamedSlotsLayout>
      {{
        Top: <div>Top Component</div>,
        Bottom: <div>Bottom Component</div>,
        Right: <div>Right Component</div>,
      }}
    </NamedSlotsLayout>
  </ExampleWrapper>
);

const customComponentExample = (
  <ExampleWrapper>
    <NamedSlotsLayout>
      {{
        Top: <BrandComponent {...brand} />,
        Bottom: <MarketComponent {...market} />,
        Right: (
          <LayoutElements.PaddedColumn>
            {['One', 'Two', 'Three'].map(s => (
              <Fonts.H1 key={s}>{s}</Fonts.H1>
            ))}
          </LayoutElements.PaddedColumn>
        ),
      }}
    </NamedSlotsLayout>
  </ExampleWrapper>
);

const ChildrenAsObjectStory: SFC<{}> = () => (
  <React.Fragment>
    <ReactMarkdown renderers={renderers} source={docs} />
    {basicExample}
    <ReactMarkdown renderers={renderers} source={docs2} />
    {customComponentExample}
  </React.Fragment>
);

storiesOf('_PATTERNS', module).add('4 - Children as an Object', () => (
  <ChildrenAsObjectStory />
));
