import { Column, H1, Row, Toggle } from 'components';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const AccordionWrapper = styled(Column)`
  border: 1px solid ${props => props.theme.colors.black};
`;

const AccordionTitle = styled(Row)`
  border-bottom: 1px solid ${props => props.theme.colors.black};
`;

interface IAccordionWithComponentProps extends IDefaultProps {
  /**
   * [required] a title for the component
   */
  title: string;
}

export const AccordionWithComponent: SFC<IAccordionWithComponentProps> = props => (
  <Toggle>
    {({ isToggled, toggleState }) => (
      <AccordionWrapper>
        <AccordionTitle childSpacing={10}>
          <H1>{props.title}</H1>
          <button onClick={toggleState}>Toggle</button>
        </AccordionTitle>
        {!!isToggled && props.children}
      </AccordionWrapper>
    )}
  </Toggle>
);
