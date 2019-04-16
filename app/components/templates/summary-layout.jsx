import React, { FunctionComponent } from 'react';
import { Column, Row, Display1 } from 'components';
import styled from 'styled-components';
import { colors } from 'modules/config';

const RightColumn = styled(Column)`
  box-shadow: 5px 0px 25px ${colors.black};
`;

export const SummaryLayout = props => {
  const { Left, Right } = props.children;
  return (
    <Row height="100vh">
      <Column width="70vw" height="100vh">
        <Row padding={{ top: 48, right: 16 }}>
          <Display1>{props.title}</Display1>
        </Row>
        <Column width="100%">{Left}</Column>
      </Column>
      <RightColumn width="30vw" height="100vh">
        {Right}
      </RightColumn>
    </Row>
  );
};
