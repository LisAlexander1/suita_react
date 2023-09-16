import React from 'react';
import styled from "styled-components";

import icon_image from "/IMAGE (11).svg";

const Wrapper = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  z-index: 1000;
`

const Links = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 40px;
  
  a {
    color: ${props => props.theme.fg_primary};
    transition: color 200ms;
    font-size: 17px;
    text-decoration: none;
    
    &:hover {
      color: ${props => props.theme.accent};
    }
  }
`

function Header(props) {
    return (
        <Wrapper>
            <img src={icon_image}/>
            <Links>
                <a href="#home">Home</a>
                <a href="#episodes">Episodes</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </Links>
        </Wrapper>
    );
}

export default Header;