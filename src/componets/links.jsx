import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    gap: 17px;
`
const Links = (props) => (
    <Wrapper>
        <a><img src="/spotify.svg"/></a>
        <a><img src="/IMAGE%20(2).svg"/></a>
        <a><img src="/IMAGE%20(3).svg"/></a>
        <a><img src="/IMAGE%20(4).svg"/></a>
        <a><img src="/IMAGE%20(5).svg"/></a>
    </Wrapper>
);

export default Links;