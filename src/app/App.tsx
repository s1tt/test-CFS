import styled from 'styled-components';
import { AppRouter } from './providers/router/';

const AppWrapper = styled.main`
  max-width: 1280px;
  min-height: 100vh;
  padding: 2rem;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppRouter />
    </AppWrapper>
  );
};

export default App;
