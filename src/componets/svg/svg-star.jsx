import React from 'react';
import styled, {css} from "styled-components";

const Star = styled.svg`
  ${props => props.invert ? 
    css`
        fill: ${props=> props.theme.rating};
    ` :
    css`
      fill: ${props=> props.theme.bg_secondary};
    `
}
`
function SvgStar({invert}) {
    return (
        <Star invert={invert} width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.01265 13.6975L13.1626 16.2075C13.9226 16.6675 14.8526 15.9875 14.6526 15.1275L13.5526 10.4075L17.2226 7.2275C17.8926 6.6475 17.5326 5.5475 16.6526 5.4775L11.8226 5.0675L9.93265 0.6075C9.59265 -0.2025 8.43265 -0.2025 8.09265 0.6075L6.20265 5.0575L1.37265 5.4675C0.492646 5.5375 0.132646 6.6375 0.802646 7.2175L4.47265 10.3975L3.37265 15.1175C3.17265 15.9775 4.10265 16.6575 4.86265 16.1975L9.01265 13.6975Z"/>
        </Star>
    );
}

export default SvgStar;