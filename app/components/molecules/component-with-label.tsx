import { Body1, Row } from 'components';
import React, { SFC } from 'react';
import { IDefaultProps } from 'types/default-props';

interface IComponentWithLabelProps extends IDefaultProps {
  /**
   * [required] a title for the component
   */
  label: string;
}

export const ComponentWithLabel: SFC<IComponentWithLabelProps> = props => (
  <Row childSpacing={4}>
    {props.children}
    <Body1>{props.label}</Body1>
  </Row>
);
