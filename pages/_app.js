import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/AlurakutCommons';
import data from '../data.json';

const GlobalStyle = createGlobalStyle`

  /* Reset CSS */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.container.backgroundPrimary};
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img{
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`;
export default function App({ Component, pageProps }) {
  const [themeMode, setThemeMode] = useState(data.colors.colorOriginal);
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Component
          {...pageProps}
          themeMode={themeMode}
          setThemeMode={setThemeMode}
        />
      </ThemeProvider>
    </>
  );
}
