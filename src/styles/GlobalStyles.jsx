import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --border-radius-tiny: 4px;
    --border-radius-sm: 6px;
    --border-radius-md: 8px;
    --border-radius-lg: 12.47px;
    --border-radius-3: 6.45px;
 
    &, &.light-mode {
    --color-brand: #8a74f9;
  --color-gray-0: #ffffff;
  --color-gray-50: #dddddd;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #92a1ad;
  --color-gray-300: #e7eaed;
  --color-gray-400: #E9EAEA;
  --color-gray-500: #292d32;
  --color-gray-600: #1e1b39;
  --color-gray-700: #1c1c28;
  --color-gray-800: #FCFCFC;
  --color-gray-900:#9C9D9F;

  
  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

  --image-grayscale: 0;
  --image-opacity: 100%;
  }
}

html {
  font-size: 62.5%;
  font-weight: 500;
}

body[dir="ltr"] {
  /* font-family: "Inter", sans-serif; */

  /* font-family: 'Inter', sans-serif; */
font-family: 'Roboto', sans-serif;
}

body[dir="rtl"] {
  font-family: "Neo Sans Arabic", sans-serif;
  font-family: "Neo Sans", sans-serif;
}


body {
  padding-top: 3.2rem;
}


button {
    cursor: pointer;
    outline: none;
    border: none;
}

button:has(svg) {
  line-height: 0;
}

* {
box-sizing: border-box;
padding: 0;
margin: 0;
}

*:disabled {
  cursor: not-allowed;
}



a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

`;

export default GlobalStyles;
