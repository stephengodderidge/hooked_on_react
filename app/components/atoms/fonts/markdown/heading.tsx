// external dependencies
import React from 'react';
import styled from 'styled-components';

// custom components
import { Fonts } from 'components/atoms';

// interfaces
import { IDefaultProps } from 'types/default-props';

interface IHeadingProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Heading level to be rendered (ranges from 1 to 6)
   */
  level: number;

  /**
   * [required] Any children being passed to heading
   */
  children: any;
}

const StyledH1 = styled(Fonts.H1)`
  padding: 16px 0px 4px 0px;
  border-bottom: 2px solid ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.black};
`;

const StyledH2 = styled(Fonts.H2)`
  padding: 12px 0px 4px 0px;
  color: ${props => props.theme.colors.black};
`;

const StyledH3 = styled(Fonts.H3)`
  padding: 8px 0px 4px 0px;
  color: ${props => props.theme.colors.black};
`;

const StyledH4 = styled(Fonts.H4)`
  padding: 4px 0px 4px 0px;
  color: ${props => props.theme.colors.black};
`;

/** Heading */
export const Heading: React.SFC<IHeadingProps> = props => {
  const renderHeading = () => {
    switch (props.level) {
      case 1:
        return (
          <StyledH1
            boldness={Fonts.BoldnessLevels.Semibold}
            className={props.className}
          >
            {props.children}
          </StyledH1>
        );
      case 2:
        return (
          <StyledH2
            boldness={Fonts.BoldnessLevels.Semibold}
            className={props.className}
          >
            {props.children}
          </StyledH2>
        );
      case 3:
        return (
          <StyledH3
            boldness={Fonts.BoldnessLevels.Semibold}
            className={props.className}
          >
            {props.children}
          </StyledH3>
        );
      case 4:
      default:
        return (
          <StyledH4
            boldness={Fonts.BoldnessLevels.Semibold}
            className={props.className}
          >
            {props.children}
          </StyledH4>
        );
    }
  };
  return renderHeading();
};
Heading.displayName = 'Heading';
