import React, {SFC} from "react";
import { Column, Row, H1 } from 'components';
import { IDefaultProps } from 'types/default-props';



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
        <H1>{props.title}</H1>
        {Left[0]}
      </Column>
      {Right}
    </Row>
  )
}
