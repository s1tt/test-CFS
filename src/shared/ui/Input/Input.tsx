import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
}

const StyledLabel = styled.label`
  height: 100%;
`;

const StyledInput = styled.input`
  height: 100%;
  padding: 5px 7px;
  width: 300px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textColorSecondary};
  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
  }
`;

const Input = ({ value, setValue, type = 'text', ...props }: InputProps) => {
  return (
    <StyledLabel htmlFor='searchQuery'>
      <StyledInput
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        {...props}
      />
    </StyledLabel>
  );
};

export default Input;
