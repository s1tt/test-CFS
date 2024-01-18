import styled from 'styled-components';
import Loader from '../Loader/Loader';

const StyledPageLoader = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLoader = () => {
  return (
    <StyledPageLoader>
      <Loader />
    </StyledPageLoader>
  );
};

export default PageLoader;
