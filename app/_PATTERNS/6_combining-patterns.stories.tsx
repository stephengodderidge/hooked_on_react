import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components';
import React, { Component, createContext, SFC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { renderers } from '../components/atoms/fonts/markdown';
import { ExampleWrapper } from './shared-components';

const intro = `
## The Feature - Data Filters
`;

const intro2 = `
## Component Breakdown
  * Brand Filter
  * Market Filter
  * Search or Hierarchy Filter
  * Horizontal Rule and Horizontal Rule w/ OR text

## First Approach (Novice React Dev)
  1. Build Monolithic class component with local state to manage values selected in dropdowns, text
  inputs, and checkboxes
  2. Split \`render\` method into smaller render methods on class


### Step 1 - Monolithic Class
  \`\`\`tsx
  class Filters extends Component<{}, IFiltersState> {
    state = {
      isSearchActive: true,
      searchTerm: '',
      selectedBrand: 'Gap',
      selectedMarkets: ['US'],
      selectedHierarchy: 'Legacy',
    };
  
    toggleActiveSearch = (...args) => /* setState({...}) logic here */;
    updateSearch = (...args) => /* setState({...}) logic here */;
    updateBrand = (...args) => /* setState({...}) logic here */;
    updateHierarchy = (...args) => /* setState({...}) logic here */;
    updateMarket = (...args) => /* setState({...}) logic here */;
  
    render() {
      return (
        <FiltersSidebar>
          {/* Render Brand Here */}
          <Hr />
          {/* Render Market Here */}
          <Hr />
          {/* Render Search or Hierarchy Here */}
        </FiltersSidebar>
      );
    }
  }
  \`\`\`

### Step 2 - Separate render methods
  \`\`\`tsx
  renderBrand = () => (
    <>
      <HeadingFont>Brand</HeadingFont>
      <select value={this.state.selectedBrand} onChange={this.updateBrand}>
        {brandOptions.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </>
  );

  {...}

  render() {
    return (
      <FiltersSidebar>
        {this.renderBrand()}
        <Hr />
        {this.renderMarket()}
        <Hr />
        {this.renderSearchOrHierarchy()}
      </FiltersSidebar>
    );
  }
  \`\`\`

## Approach Retro
**Pros**
  * Single file makes it relatively easy to find bugs
  * Business logic is centralized and easy to follow
  * Generally quick to create

**Cons**
  * Monolithic files are rigid and rarely reusable
  * Ongoing maintenance of business logic, structure, and styles becomes increasingly difficult as
  more hands are added to the pot

## Second Approach (Advanced React Dev)
  1. Build small, stand-alone, reusable components designed around user interactions
  2. Use Hooks + Context to store state and "hide" automatic integrations
  3. Use Named Slots to structure UI
  4. Use Children as an Array to add \`<Hr />\` between each child
  5. Combine patterns & components into finished product

### Step 1 - Small, stand-alone, reusable components (Dropdown Filter)
\`\`\`tsx
const DropdownFilter: SFC<IMultiOptionFilter> = props => {
  return (
    <FilterContext.Consumer>
      {({ filterData, setFilterForKey }) => {
        const selectedOption = filterData[props.filterKey] || '';
        const setDropdownFilter = (e: React.ChangeEvent<HTMLSelectElement>) =>
          setFilterForKey(props.filterKey, e.target.value);
        return (
          <>
            <HeadingFont>{props.title}</HeadingFont>
            <select
              value={selectedOption}
              onChange={setDropdownFilter}
              disabled={props.disabled}
            >
              {props.options.map(o => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </>
        );
      }}
    </FilterContext.Consumer>
  );
};
\`\`\`

### Step 2 - Hooks + Context
\`\`\`tsx
type TSetFilterCallback = (key: string, value: string | string[]) => void;
interface IFilterData {
  [key: string]: string | string[];
}
interface IFilterContext {
  filterData: IFilterData;
  setFilterForKey: TSetFilterCallback;
  [key: string]: IFilterData | TSetFilterCallback;
}
const initialContext = {
  filterData: {},
  setFilterForKey: (): void => null,
};
const FilterContext = createContext<IFilterContext>(initialContext);
\`\`\`

### Step 3 - Named Slots
\`\`\`tsx
interface IOrFilter {
  children: {
    top: (disabled: boolean) => JSX.Element;
    bottom: (disabled: boolean) => JSX.Element;
  };
}

const OrFilter: SFC<IOrFilter> = props => {
  const { top, bottom } = props.children;
  const [activeSection, setActiveSection] = useState('top');
  const getOnClick = (section: string) => () => setActiveSection(section);

  return (
    <>
      <ActiveFilter onClick={getOnClick('top')} isActive={activeSection === 'top'}>
        {top(activeSection === 'bottom')}
      </ActiveFilter>
      <OrDivider />
      <ActiveFilter
        onClick={getOnClick('bottom')}
        isActive={activeSection === 'bottom'}
      >
        {bottom(activeSection === 'top')}
      </ActiveFilter>
    </>
  );
};
\`\`\`

### Step 4 - Children as an Array
\`\`\`tsx
interface IFiltersSidebarLayout {
  children: JSX.Element[];
}

const FiltersSidebarLayout: SFC<IFiltersSidebarLayout> = props => (
  <FiltersSidebar>
    {React.Children.toArray(props.children).map(
      (child: JSX.Element, index: number) =>
        index < props.children.length - 1 ? (
          <React.Fragment key={child.key}>
            {child}
            <Hr />
          </React.Fragment>
        ) : (
          child
        ),
    )}
  </FiltersSidebar>
);
\`\`\`

### Step 5 - Combine Everything
\`\`\`tsx
const AdvancedFilters: SFC<{}> = () => {
  const [filtersState, setFiltersState] = useState<IFilterContext>(initialContext);

  const setFilter = (key: string, value: string | string[]) =>
    setFiltersState({
      ...filtersState,
      filterData: { ...filtersState.filterData, [key]: value },
    });

  const filterContextValue = {
    ...filtersState,
    setFilterForKey: setFilter,
  };
  return (
    <FilterContext.Provider value={filterContextValue}>
      <FiltersSidebarLayout>
        <DropdownFilter title="Brand" options={brandOptions} filterKey="brand" />
        <CheckboxFilter title="Market" options={marketOptions} filterKey="markets" />
        <OrFilter>
          {{
            top: disabled => (
              <TextInputFilter
                title="Search"
                filterKey="search"
                disabled={disabled}
              />
            ),
            bottom: disabled => (
              <DropdownFilter
                title="Hierarchy"
                options={hierarchyOptions}
                filterKey="hierarchy"
                disabled={disabled}
              />
            ),
          }}
        </OrFilter>
      </FiltersSidebarLayout>
    </FilterContext.Provider>
  );
};
\`\`\`

## Approach Retro
**Pros**
  * Smaller components promote reuse across oher features
  * Automatic features accelerate future development
  * Single responsibility separates design from function; narrowing scope of code where bugs occur

**Cons**
  * Initial architecture can be unclear; requiring multiple iterations
  * Implementation details can be opaque; resulting in a slower, more difficult onboarding
  experience

## Side by Side Demo (First | Second)
`;

// #region Shared Code
const FiltersSidebar = styled(LayoutElements.PaddedColumn)`
  background-color: ${props => props.theme.colors.grey1};
`;

const DemoRow = styled(LayoutElements.Row)`
  justify-content: space-between;
  width: 100%;
`;

const Hr = styled.hr`
  border-top: 1px solid ${props => props.theme.colors.black};
  border-style: solid;
  margin: 16px 8px;
`;

const CheckboxWithLabel = styled.div`
  padding-right: 16px;
`;

const FullWidthRow = styled(LayoutElements.Row)`
  width: 100%;
  hr {
    flex: 1;
  }
`;

interface IActiveFilter {
  isActive: boolean;
  onClick: () => void;
}

const FilterWrapper = styled.div<IActiveFilter>`
  width: 100%;
  input {
    width: 100%;
  }
  select {
    width: 100%;
  }

  ${props =>
    !props.isActive &&
    `
    opacity: 0.5;
    &:hover {
      cursor: pointer;
    }
  `}
`;

const brandOptions = ['Gap', 'Old Navy', 'Banana Republic'];
const marketOptions = ['US', 'Canada', 'Japan', 'Europe'];
const hierarchyOptions = ['Legacy', 'Universal'];
// #endregion Shared Code
// #region Initial Filters Architecture
interface IFiltersState {
  isSearchActive: boolean;
  searchTerm: string;
  selectedBrand: string;
  selectedMarkets: string[];
  selectedHierarchy: string;
}

class Filters extends Component<{}, IFiltersState> {
  state = {
    isSearchActive: true,
    searchTerm: '',
    selectedBrand: 'Gap',
    selectedMarkets: ['US'],
    selectedHierarchy: 'Legacy',
  };

  toggleActiveSearch = () =>
    this.setState({ isSearchActive: !this.state.isSearchActive });

  updateSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ searchTerm: e.target.value });

  updateBrand = (e: React.ChangeEvent<HTMLSelectElement>) =>
    this.setState({ selectedBrand: e.target.value });

  updateHierarchy = (e: React.ChangeEvent<HTMLSelectElement>) =>
    this.setState({ selectedHierarchy: e.target.value });

  updateMarket = (e: React.ChangeEvent<HTMLInputElement>) => {
    const market = e.target.value;
    if (this.state.selectedMarkets.includes(market)) {
      this.setState({
        selectedMarkets: this.state.selectedMarkets.filter(m => m !== market),
      });
    } else {
      this.setState({
        selectedMarkets: this.state.selectedMarkets.concat(market),
      });
    }
  };

  renderBrand = () => (
    <>
      <Fonts.H1>Brand</Fonts.H1>
      <select value={this.state.selectedBrand} onChange={this.updateBrand}>
        {brandOptions.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </>
  );

  renderMarket = () => (
    <>
      <Fonts.H1>Market</Fonts.H1>
      <LayoutElements.Row>
        {marketOptions.map(market => (
          <CheckboxWithLabel key={market}>
            <input
              type="checkbox"
              value={market}
              onChange={this.updateMarket}
              checked={this.state.selectedMarkets.includes(market)}
            />
            <label htmlFor={market}>{market}</label>
          </CheckboxWithLabel>
        ))}
      </LayoutElements.Row>
    </>
  );

  renderSearchOrHierarchy = () => {
    const nullFunc = (): void => null;
    return (
      <>
        <ActiveFilter
          isActive={this.state.isSearchActive}
          onClick={!this.state.isSearchActive ? this.toggleActiveSearch : nullFunc}
        >
          <Fonts.H1>Search</Fonts.H1>
          <input
            type="text"
            value={this.state.searchTerm}
            placeholder="Enter CCs or SKUs or STYLEs"
            onChange={this.updateSearch}
            disabled={!this.state.isSearchActive}
          />
        </ActiveFilter>
        <FullWidthRow>
          <Hr />
          OR
          <Hr />
        </FullWidthRow>
        <ActiveFilter
          isActive={!this.state.isSearchActive}
          onClick={this.state.isSearchActive ? this.toggleActiveSearch : nullFunc}
        >
          <Fonts.H1>Hierarchy</Fonts.H1>
          <select
            value={this.state.selectedHierarchy}
            onChange={this.updateHierarchy}
            disabled={this.state.isSearchActive}
          >
            {hierarchyOptions.map(hierarchy => (
              <option key={hierarchy} value={hierarchy}>
                {hierarchy}
              </option>
            ))}
          </select>
        </ActiveFilter>
      </>
    );
  };

  render() {
    return (
      <FiltersSidebar>
        {this.renderBrand()}
        <Hr />
        {this.renderMarket()}
        <Hr />
        {this.renderSearchOrHierarchy()}
      </FiltersSidebar>
    );
  }
}
// #endregion Initial Filters Architecture
// #region Advanced Filters Architecture
interface IFilter {
  title: string;
  disabled?: boolean;
  filterKey: string;
}

interface IMultiOptionFilter extends IFilter {
  options: string[];
}

const DropdownFilter: SFC<IMultiOptionFilter> = props => {
  return (
    <FilterContext.Consumer>
      {({ filterData, setFilterForKey }) => {
        const selectedOption = filterData[props.filterKey] || '';
        const setDropdownFilter = (e: React.ChangeEvent<HTMLSelectElement>) =>
          setFilterForKey(props.filterKey, e.target.value);
        return (
          <>
            <Fonts.H1>{props.title}</Fonts.H1>
            <select
              value={selectedOption}
              onChange={setDropdownFilter}
              disabled={props.disabled}
            >
              {props.options.map(o => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </>
        );
      }}
    </FilterContext.Consumer>
  );
};

const CheckboxFilter: SFC<IMultiOptionFilter> = props => (
  <FilterContext.Consumer>
    {({ filterData, setFilterForKey }) => {
      const checkboxSelections = (filterData[props.filterKey] || []) as string[];
      const setCheckboxSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (checkboxSelections.includes(value)) {
          setFilterForKey(
            props.filterKey,
            checkboxSelections.filter(f => f !== value),
          );
        } else {
          setFilterForKey(props.filterKey, checkboxSelections.concat(value));
        }
      };
      return (
        <>
          <Fonts.H1>{props.title}</Fonts.H1>
          <LayoutElements.Row>
            {props.options.map(o => (
              <CheckboxWithLabel key={o}>
                <input
                  type="checkbox"
                  value={o}
                  onChange={setCheckboxSelection}
                  checked={checkboxSelections.includes(o)}
                />
                <label htmlFor={o}>{o}</label>
              </CheckboxWithLabel>
            ))}
          </LayoutElements.Row>
        </>
      );
    }}
  </FilterContext.Consumer>
);

const TextInputFilter: SFC<IFilter> = props => (
  <FilterContext.Consumer>
    {({ filterData, setFilterForKey }) => {
      const textValue = filterData[props.filterKey] || '';
      const setTextValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFilterForKey(props.filterKey, e.target.value);
      return (
        <>
          <Fonts.H1>{props.title}</Fonts.H1>
          <input
            type="text"
            value={textValue}
            placeholder="Enter CCs or SKUs or STYLEs"
            onChange={setTextValue}
            disabled={props.disabled}
          />
        </>
      );
    }}
  </FilterContext.Consumer>
);

const OrDivider: SFC<{}> = () => (
  <FullWidthRow>
    <Hr />
    OR
    <Hr />
  </FullWidthRow>
);

const ActiveFilter: SFC<IActiveFilter> = props => <FilterWrapper {...props} />;

interface IOrFilter {
  children: {
    top: (disabled: boolean) => JSX.Element;
    bottom: (disabled: boolean) => JSX.Element;
  };
}

const OrFilter: SFC<IOrFilter> = props => {
  const { top, bottom } = props.children;
  const [activeSection, setActiveSection] = useState('top');
  const getOnClick = (section: string) => () => setActiveSection(section);

  return (
    <>
      <ActiveFilter onClick={getOnClick('top')} isActive={activeSection === 'top'}>
        {top(activeSection === 'bottom')}
      </ActiveFilter>
      <OrDivider />
      <ActiveFilter
        onClick={getOnClick('bottom')}
        isActive={activeSection === 'bottom'}
      >
        {bottom(activeSection === 'top')}
      </ActiveFilter>
    </>
  );
};

interface IFiltersSidebarLayout {
  children: JSX.Element[];
}

const FiltersSidebarLayout: SFC<IFiltersSidebarLayout> = props => (
  <FiltersSidebar>
    {React.Children.toArray(props.children).map(
      (child: JSX.Element, index: number) =>
        index < props.children.length - 1 ? (
          <React.Fragment key={child.key}>
            {child}
            <Hr />
          </React.Fragment>
        ) : (
          child
        ),
    )}
  </FiltersSidebar>
);

type TSetFilterCallback = (key: string, value: string | string[]) => void;
interface IFilterData {
  [key: string]: string | string[];
}
interface IFilterContext {
  filterData: IFilterData;
  setFilterForKey: TSetFilterCallback;
  [key: string]: IFilterData | TSetFilterCallback;
}
const initialContext = {
  filterData: {},
  setFilterForKey: (): void => null,
};
const FilterContext = createContext<IFilterContext>(initialContext);

const AdvancedFilters: SFC<{}> = () => {
  const [filtersState, setFiltersState] = useState<IFilterContext>(initialContext);

  const setFilter = (key: string, value: string | string[]) =>
    setFiltersState({
      ...filtersState,
      filterData: { ...filtersState.filterData, [key]: value },
    });

  const filterContextValue = {
    ...filtersState,
    setFilterForKey: setFilter,
  };
  return (
    <FilterContext.Provider value={filterContextValue}>
      <FiltersSidebarLayout>
        <DropdownFilter title="Brand" options={brandOptions} filterKey="brand" />
        <CheckboxFilter title="Market" options={marketOptions} filterKey="markets" />
        <OrFilter>
          {{
            top: disabled => (
              <TextInputFilter
                title="Search"
                filterKey="search"
                disabled={disabled}
              />
            ),
            bottom: disabled => (
              <DropdownFilter
                title="Hierarchy"
                options={hierarchyOptions}
                filterKey="hierarchy"
                disabled={disabled}
              />
            ),
          }}
        </OrFilter>
      </FiltersSidebarLayout>
    </FilterContext.Provider>
  );
};
// #endregion Advanced Filters Architecture

const CombinedPatternsStory: SFC<{}> = () => (
  <>
    <ReactMarkdown renderers={renderers} source={intro} />
    <ExampleWrapper>
      <AdvancedFilters />
    </ExampleWrapper>
    <ReactMarkdown renderers={renderers} source={intro2} />
    <DemoRow>
      <Filters />
      <AdvancedFilters />
    </DemoRow>
  </>
);

storiesOf('_PATTERNS', module).add('6 - Combining Patterns', () => (
  <CombinedPatternsStory />
));
