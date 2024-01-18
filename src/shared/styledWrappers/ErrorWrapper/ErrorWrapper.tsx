import { ReactNode } from 'react';
import styled from 'styled-components';

interface ErrorWrapper {
  children: ReactNode;
}

const StyledErrorWrapper = styled.h2`
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

const ErrorWrapper = ({ children }: ErrorWrapper) => {
  return <StyledErrorWrapper>{children}</StyledErrorWrapper>;
};

export default ErrorWrapper;
