import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components';
import React, { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { renderers } from '../components/atoms/fonts/markdown';

const docs = `
  # Children as Object
  The **Children as Object** pattern is uncommon and serves as an example of a pattern with very
  specific use-cases.  In many cases, it's more appropriate to pass the object in as a prop to the
  parent component; resulting in fewer lines of code and a cleaner implementation.

  One potential use-case for this pattern involves data-driven views and is referred to as
  **Data Projection**.  When a page's view is dictated by data, this pattern could result in a
  more maintainable component hierarchy.  Another use case is commonly called **Named Slots**
  and is generally used when configuring layouts.

  ## Pattern Breakdown
  The **Named Slots** or **Data Projection** pattern expects an object to be passed as the child
  of a parent component.  The parent component is responsible for displaying the child object
  in the appropriate way.  This \`NamedSlotsLayout\` component parses three components from its
  child object and organizes them into two columns:

  \`\`\`tsx
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
  \`\`\`

  ## Pattern Usage
  To use this pattern, define the children of the parent component as an object, passing in
  an object that matches the interface definition for the parent's children:

  \`\`\`tsx
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
  \`\`\`

  ## Example Implementation - Named Slots Layout
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

const ChildrenAsObjectStory: SFC<{}> = () => (
  <React.Fragment>
    <ReactMarkdown renderers={renderers} source={docs} />
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
  </React.Fragment>
);

storiesOf('_PATTERNS', module).add('4 - Children as Object', () => (
  <ChildrenAsObjectStory />
));
