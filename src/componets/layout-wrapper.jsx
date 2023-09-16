import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 1440px;
  width: 100vw;
  height: 100vh;
`;

function LayoutWrapper(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default LayoutWrapper;