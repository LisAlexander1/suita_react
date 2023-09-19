import React from 'react';
import styled from "styled-components";
import SvgStar from "./svg/svg-star.jsx";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`
function Rating({rating,className}) {
    return (
        <Wrapper className={className}>
            {[...Array(5)].map((_,index) =>
                <SvgStar key={index} invert={index < rating}/>
            )}
        </Wrapper>
    );
}

export default Rating;