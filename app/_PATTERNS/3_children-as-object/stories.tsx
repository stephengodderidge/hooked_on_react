import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Fonts, LayoutElements } from 'components';
import React, { SFC } from 'react';
import styled from 'styled-components';
import docs from './docs.mkd';

interface IShirt {
  name: string;
  size: string;
  brand: string;
}

const storyObject: IShirt = {
  name: 'Henley',
  size: 'Medium',
  brand: 'Gap',
};

interface IShirtProps {
  children: IShirt;
}

const Shirt: SFC<IShirtProps> = ({ children }) => (
  <LayoutElements.Column>
    <Fonts.H1>{children.name}</Fonts.H1>
    <LayoutElements.Row>
      <Fonts.Body2>Size:&nbsp;</Fonts.Body2>
      {children.size}
    </LayoutElements.Row>
    <LayoutElements.Row>
      <Fonts.Body2>Brand:&nbsp;</Fonts.Body2>
      {children.brand}
    </LayoutElements.Row>
  </LayoutElements.Column>
);

const Card = styled.div`
  border: 1px solid ${props => props.theme.colors.black};
  padding: 8px;
  display: inline-block;
`;

storiesOf('_PATTERNS', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: docs,
      source: false,
      header: false,
      propTables: [],
      propTablesExclude: [Card, Shirt],
      inline: true,
    },
  })
  .add('3 - Children as Object', () => (
    <Card>
      <Shirt>{storyObject}</Shirt>
    </Card>
  ));
