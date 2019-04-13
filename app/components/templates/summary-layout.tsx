import React, { FunctionComponent } from 'react';
import { Column, Row, Display1 } from 'components';
import { IDefaultProps } from 'types/default-props';

interface ISummaryLayoutProps extends IDefaultProps {
  /**
   * [required]
   */
  title: string;
}

export const SummaryLayout: FunctionComponent<ISummaryLayoutProps> = props => {
  const { Left, Right } = props.children;
  return (
    <Row height="100vh">
      <Column width="70vw" height="100vh">
        <Row padding={{ top: 48, right: 16 }}>
          <Display1>{props.title}</Display1>
        </Row>
        <Column width="100%">{Left}</Column>
      </Column>
      <Column width="30vw">{Right}</Column>
    </Row>
  );
};
