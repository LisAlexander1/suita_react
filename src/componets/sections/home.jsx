import React from 'react';
import styled from "styled-components";
import Pup from "../svg/pup.jsx";
import Links from "../links.jsx";
import Line from "../svg/line.jsx";

const Block = styled.section`
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
  align-self: center;
  gap: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LinksWrapper = styled.div`
    display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 15px;
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
  font-size: 75px;
  line-height: 88px;
  font-weight: 400;
  letter-spacing: 3.2px;
`

const LevelBold = styled.span`
  font-weight: 700;
`

const EmphasizedNext = styled.span`
  position: relative;
`

const NextLine = styled(Line)`
  fill: ${props => props.theme.accent};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`
function Home(props) {
    return (
        <Block>
            <HomeImage src="/png/IMAGE.png"/>
            <PupOffset/>
            <TextWrapper>
                <div/>
                <Header>
                    Take your <br/> podcast to the <br/>
                    <EmphasizedNext>
                        next
                        <NextLine/>
                    </EmphasizedNext>
                    <LevelBold> level</LevelBold>.
                </Header>
                <LinksWrapper>
                    <span>Listen on</span>
                    <Links/>
                </LinksWrapper>
            </TextWrapper>
        </Block>
    );
}

export default Home;