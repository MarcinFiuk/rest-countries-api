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
    colorMode === 'light' ? 'hsl(0, 0%, 77%)' : 'hsl(0, 0%, 100%)'};
};

body{
    background-color: var(--backgroundColor);
    color: var(--textColor);
    font-family: 'Nunito Sans', sans-serif;
    margin-inline: auto;
    max-width: 90rem;
    transition: all 0.3s ease-in;
}

#root{
    height: 100vh;
}

h1{
    font-size: clamp(0.875rem, 0.65rem + 0.94vw, 1.5rem);;
    font-weight: var(--fontWeight-800);
    line-height: 1.125rem;

}

h2{
    font-size:1.125rem;
    font-weight:var(--fontWeight-800);
    line-height: 1.625rem;
}
`;
