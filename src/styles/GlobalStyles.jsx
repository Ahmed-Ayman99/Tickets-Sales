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
  --color-black: #000;
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
  --color-gray-1000:#ABAAB1;
  --color-gray-1100:#E3E4E9;
  --color-gray-1200:#99A1B7;
  --color-gray-1300:#D9D9D9;
  --color-gray-1400:#292D32;
  --color-gray-1500:#e3e4e9;
  --color-gray-1600:#e8e8e8;

  

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  
  

  }

  &.dark-mode {

    --color-black: #fff;
    --color-brand: #8a74f9;
    --color-gray-0: #000;
    --color-gray-50: #222;


    
  --color-gray-100: #1d1c1a;
  --color-gray-200: #7e6f63;
  --color-gray-300: #292623;
  --color-gray-400: #272626;
  --color-gray-500: #e7e3de;
  --color-gray-600: #f2f3d7;
  --color-gray-700: #f4f4e8;
  --color-gray-800: #141414;
  --color-gray-900:#747371;
  --color-gray-1000:#65665f;
  --color-gray-1400:#e7e3de;
  --color-gray-1100:#2d2c27;
  --color-gray-1200:#776f59;
  --color-gray-1300:#373737;
  --color-gray-1500:#2d2c27;
  --color-gray-1600:#e8e8e8;


  }
}

html {
  font-size: 62.5%;
  font-weight: 500;
}

body[dir="ltr"] {
font-family: 'Roboto', sans-serif;
}

body[dir="rtl"] {
  font-family: "Neo Sans Arabic", sans-serif;
  font-family: "Neo Sans", sans-serif;
}


body {
  padding-top: 3.2rem;
  background-color: var(--color-gray-1100);
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



@media (max-width: 75em) {
  html {
    font-size: 56.25%;
  }
}

@media (max-width: 72em) {
  html {
    font-size: 50%;
  }
}

`;

export default GlobalStyles;
