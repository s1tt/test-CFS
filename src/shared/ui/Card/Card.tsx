import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  children: ReactNode;
}

const StyledCard = styled.article`
  width: 200px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.secondary};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    border: 1px solid ${props => props.theme.colors.primary};
    box-shadow: rgba(255, 255, 255, 0.19) 0px 5px 10px,
      rgba(0255, 255, 255, 0.23) 0px 3px 3px;
  }
`;

const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
