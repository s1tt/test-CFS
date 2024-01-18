import { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: ReactNode;
}

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.primary};
  font-size: 4rem;
`;

const Title = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
