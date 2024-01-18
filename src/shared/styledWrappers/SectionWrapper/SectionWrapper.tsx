import { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionWrapperProps {
  children: ReactNode;
}

const StyledSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <StyledSectionWrapper>{children}</StyledSectionWrapper>;
};

export default SectionWrapper;
