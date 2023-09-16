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

const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 40px;
  height: 100%;
  
  ul {
    height: 100%;
  }
  
  a {
    color: ${props => props.theme.fg_primary};
    transition: color 200ms;
    font-size: 17px;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    
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
                <ul><a href="#home">Home</a></ul>
                <ul><a href="#episodes">Episodes</a></ul>
                <ul><a href="#about">About</a></ul>
                <ul><a href="#contact">Contact</a></ul>
            </Links>
        </Wrapper>
    );
}

export default Header;