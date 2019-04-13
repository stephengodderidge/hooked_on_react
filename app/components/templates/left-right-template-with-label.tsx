import React, {SFC} from "react";
import { Column, Row, H1 } from 'components';
import { IDefaultProps } from 'types/default-props';
import Styled from 'styled-components'



interface ILeftRightTemplateWithLabelProps extends IDefaultProps {
  /**
   * [required]
   */
  title: string
}

export const LeftRightTemplateWithLabel: SFC<ILeftRightTemplateWithLabelProps> = props => {
  const { Left, Right } = props.children;
  return (
    <Row>
      <Column>
      <HalfWidthDiv>
        <H1>{props.title}</H1>
        {Left}
      </HalfWidthDiv>
      </Column>
      {Right}
    </Row>
  )
}

const HalfWidthDiv = Styled.div`
  width: 50%;
`