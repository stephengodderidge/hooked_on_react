import { storiesOf } from '@storybook/react';
import { MaterialFormElements, Row } from 'components';
import React from 'react';
import { AccordionWithComponent, ComponentWithLabel } from './';

const onChange = (): null => null;

storiesOf('Molecules', module).add('All', () => (
  <AccordionWithComponent title="Sample Title">
    <Row childSpacing={20}>
      <ComponentWithLabel label="Sample Label 1">
        <MaterialFormElements.Checkbox onChange={onChange} value="" />
      </ComponentWithLabel>
      <ComponentWithLabel label="Sample Label 2">
        <MaterialFormElements.Checkbox onChange={onChange} value="" />
      </ComponentWithLabel>
      <ComponentWithLabel label="Sample Label 3">
        <MaterialFormElements.Checkbox onChange={onChange} value="" />
      </ComponentWithLabel>
    </Row>
  </AccordionWithComponent>
));
