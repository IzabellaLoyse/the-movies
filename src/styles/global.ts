import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-sky-50: #F0F9FF;
    --color-blue-500: #3B82F6;
    --color-blue-600: #2563EB;

    --color-black-900: #000000;

    --color-neutral-700: #404040;
    --color-neutral-900: #171717;

    --border-radius-global: 5px;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-neutral-900);
    color: var(--color-sky-50);
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4 {
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;
}

a {
  text-decoration: none;
  color: var(--color-blue-500);
  transition: 0.5s ease-in-out;

  &:hover {
    color: var(--color-blue-600);
  }
}

li {
    list-style: none;
  }

img {
  max-width: 100%;
  }

img[width][height] {
    height: auto;
  }
`;

export default GlobalStyle;
