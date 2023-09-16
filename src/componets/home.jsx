import React from 'react';
import styled from "styled-components";
import Pup from "./svg/pup.jsx";

const Block = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 60px;
  margin: 60px 70px;
  height: 873px;
`

const TextWrapper = styled.div`
  flex: 1 1 50%;
  margin-right: 60px;
  height: min-content;
  align-self: center;
`

const LinksWrapper = styled.div`
  align-self: flex-end;
`

const HomeImage = styled.img`
  display: block;
  flex: 1 1 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`

const PupOffset = styled(Pup)`
  position: absolute;
  fill: ${props => props.theme.accent};
  top: -26px;
  left: -26px;
`

const Header = styled.h1`
  font-size: 3.18rem;
  align-self: center;
`
function Home(props) {
    return (
        <Block>
            <HomeImage src="/png/IMAGE.png"/>
            <PupOffset/>
            <TextWrapper>
                <Header>
                    Take your podcast to the
                    <span> next</span>
                    <span> level</span>.
                </Header>
                <LinksWrapper>
                    <span>Listen on</span>
                </LinksWrapper>
            </TextWrapper>
        </Block>
    );
}

export default Home;