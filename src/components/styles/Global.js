import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
--fontWeight-300:300;
--fontWeight-600:600;
--fontWeight-800:800;


--backgroundColor: ${({ colorMode }) =>
    colorMode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};

--elementColor: ${({ colorMode }) =>
    colorMode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};

--textColor:${({ colorMode }) =>
    colorMode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
--svgFill :${({ colorMode }) =>
    colorMode === 'light' ? 'transparent' : 'hsl(0, 0%, 100%)'};
--inputColor :${({ colorMode }) =>
    colorMode === 'light' ? 'hsl(0, 0%, 52%)' : 'hsl(0, 0%, 100%)'};
/* --svgFill :{({ colorMode }) => */
    /* colorMode === 'light' ? 'transparent' : 'hsl(0, 0%, 100%)'}; */
/* --svgFill :{({ colorMode }) => */
    /* colorMode === 'light' ? 'transparent' : 'hsl(0, 0%, 100%)'}; */
//_____________
--darkBlue: hsl(209, 23%, 22%);// (Dark Mode Elements)
--veryDarkBlue-1 : hsl(207, 26%, 17%); //(Dark Mode Background)
--veryDarkBlue-2: hsl(200, 15%, 8%); // (Light Mode Text)!!!!!!!!!!!!
--darkGray: hsl(0, 0%, 52%);// (Light Mode Input)
--veryLightGray: hsl(0, 0%, 98%);// (Light Mode Background)
--white: hsl(0, 0%, 100%);// (Dark Mode Text & Light Mode Elements)
--lightGray:hsl(0,0%,77%);//placeholder Light Mode
};

body{
    font-family: 'Nunito Sans', sans-serif;
    max-width:1440px;
    margin-inline:auto;
    color: var(--textColor);
    transition: all 0.3s linear;
}

h1{
    font-weight:var(--fontWeight-800);
    font-size: clamp(0.875rem, 0.65rem + 0.94vw, 1.5rem);;
    line-height: 1.125rem;

}

h3{
    font-size:1.125rem;
    font-weight:var(--fontWeight-800);
    line-height: 1.625rem;
}

p{
    font-weight: var(--fontWeight-300);
    font-size: 0.875rem;
    line-height: 1rem;
}
`;
