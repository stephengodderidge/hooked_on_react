import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components';
import React, { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '../components/atoms/fonts/markdown';

const docs = `
  # Children as Object
  The **Children as Object** pattern is uncommon and serves as an example of a pattern with very
  specific use-cases.  In many cases, it's more appropriate to pass the object in as a prop to the
  parent component; resulting in fewer lines of code and a cleaner implementation.

  In most cases, this pattern should only be chosen for its code-style if highly-configurable
  component combinations are needed.  Because JSON is so versatile, an object may contain data,
  functions, components, and more.  This pattern can leverage that versatility in a way that can
  be more readable or flexible than simply passing the same object as a prop to a component.

  ## Pattern Breakdown

  ## Pattern Usage

  ## Example Implementation - SOMETHING
`;

interface IFilter {
  selected: string | string[];
  options: string[];
}

interface IFilters {
  [key: string]: IFilter;
}

const filters: IFilters = {
  brand: {
    selected: 'Banana Republic',
    options: ['Banana Republic', 'Gap', 'Old Navy'],
  },
  market: {
    selected: ['US', 'Canada'],
    options: ['US', 'Canada', 'Japan'],
  },
};

const Brand: SFC<{ brand: IFilter }> = props => (
  <LayoutElements.Column>
    <Fonts.H1>Brand</Fonts.H1>
    <select>
      {props.brand.options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </LayoutElements.Column>
);

const Market: SFC<{ market: IFilter }> = props => (
  <LayoutElements.Column>
    <Fonts.H1>Market</Fonts.H1>
    <LayoutElements.RowWithPadding>
      {props.market.options.map(option => (
        <>
          <input type="checkbox" key={option} value={option} name={option} />
          <label htmlFor={option}>{option}</label>
        </>
      ))}
    </LayoutElements.RowWithPadding>
  </LayoutElements.Column>
);

interface IDemoComponentProps {
  children: IFilters;
}

const DemoComponent: SFC<IDemoComponentProps> = props => {
  const { brand, market } = props.children;
  return (
    <>
      {brand && <Brand brand={brand} />}
      {brand && <Market market={market} />}
    </>
  );
};

const ChildrenAsObjectStory: SFC<{}> = () => (
  <React.Fragment>
    <ReactMarkdown renderers={renderers} source={docs} />
    <DemoComponent>{filters}</DemoComponent>
  </React.Fragment>
);

storiesOf('_PATTERNS', module).add('3 - Children as Object', () => (
  <ChildrenAsObjectStory />
));
