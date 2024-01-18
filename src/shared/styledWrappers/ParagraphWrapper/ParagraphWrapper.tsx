import { ReactNode } from 'react';
import styled from 'styled-components';

interface ParagraphWrapper {
  children: ReactNode;
}

const StyledParagraphWrapper = styled.p`
  color: ${props => props.theme.colors.textColorPrimary};
  margin-bottom: 10px;
`;

const ParagraphWrapper = ({ children }: ParagraphWrapper) => {
  return <StyledParagraphWrapper>{children}</StyledParagraphWrapper>;
};

export default ParagraphWrapper;
