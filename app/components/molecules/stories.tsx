import { storiesOf } from '@storybook/react';
import { Checkbox, Row } from 'components';
import React from 'react';
import { AccordionWithComponent, ComponentWithLabel } from './';

const onChange = (): null => null;

storiesOf('Molecules', module).add('All', () => (
  <AccordionWithComponent title="Sample Title">
    <Row childSpacing={20}>
      <ComponentWithLabel label="Sample Label 1">
        <Checkbox onChange={onChange} value="" />
      </ComponentWithLabel>
      <ComponentWithLabel label="Sample Label 2">
        <Checkbox onChange={onChange} value="" />
      </ComponentWithLabel>
      <ComponentWithLabel label="Sample Label 3">
        <Checkbox onChange={onChange} value="" />
      </ComponentWithLabel>
    </Row>
  </AccordionWithComponent>
));
