import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | number;
  $active?: boolean;
  $nav?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 7px 12px;
  cursor: ${props => (props.$active || props.disabled ? 'default' : 'pointer')};
  background-color: ${props =>
    props.$active ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props =>
    props.$active
      ? props.theme.colors.textColorSecondary
      : props.theme.colors.textColorPrimary};
  border: none;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  align-self: ${props => (props.$nav ? 'flex-start' : '')};
  &:hover,
  &:disabled {
    opacity: ${props => (props.$active ? 1 : 0.7)};
  }
`;

const Button = ({ type = 'button', children, ...props }: ButtonProps) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
