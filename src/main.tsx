import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

const theme: DefaultTheme = {
  colors: {
    background: '#333333',
    primary: '#dddddd',
    secondary: '#1f1d1d',
    textColorPrimary: '#ffffff',
    textColorSecondary: '#1f1d1d'
  }
};

const Global = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1.2rem;
  background-color: ${theme.colors.background};
  }
`;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <Global />
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
