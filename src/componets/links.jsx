import React from 'react';
import styled from "styled-components";
import spotify from "/spotify.svg"
import apple_podcasts from "/apple-podcasts.svg"
import overcast from "/overcast.svg"
import soundcloud from "/soundcloud.svg"
import pocket_casts from "/pocket-casts.svg"


const Wrapper = styled.ul`
    display: flex;
    list-style: none;
    gap: 17px;
`

const LinkIcon = styled.img`
  transition: 200ms;
  
  &:hover {
    transform: scale(1.3);
  }
`
const Links = () => (
    <Wrapper>
        <li><a><LinkIcon src={spotify}/></a></li>
        <li><a><LinkIcon src={apple_podcasts}/></a></li>
        <li><a><LinkIcon src={overcast}/></a></li>
        <li><a><LinkIcon src={soundcloud}/></a></li>
        <li><a><LinkIcon src={pocket_casts}/></a></li>
    </Wrapper>
);

export default Links;