import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import styled from 'styled-components';

interface SearchFormProps {
  value: string;
  setValue: (value: string) => void;
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  isFetching: boolean;
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
  position: relative;
`;

const SearchForm = ({
  value,
  setValue,
  handleSubmitForm,
  isFetching
}: SearchFormProps) => {
  return (
    <StyledForm onSubmit={e => handleSubmitForm(e)}>
      <Input
        value={value}
        setValue={setValue}
        name='searchQuery'
        id='searchQuery'
        type='search'
        placeholder='Search the post'
        disabled={isFetching}
      />
      <Button type='submit' disabled={isFetching || !value}>
        Search
      </Button>
    </StyledForm>
  );
};

export default SearchForm;
