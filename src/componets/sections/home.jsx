import React from 'react';
import styled from "styled-components";
import SvgLinesTop from "../svg/svg-lines-top.jsx";
import Links from "../links.jsx";
import Line from "../svg/line.jsx";
import Photo from "/png/IMAGE.png"

const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  gap: 60px;
  height: 873px;
`

const TextWrapper = styled.div`
  flex: 1 0 50%;
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
  flex: 1 1 auto;
  object-fit: cover;
  height: 100%;
  width: auto;
  max-width: 100%;
  border-radius: 12px;
`

const PupOffset = styled(SvgLinesTop)`
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
        <Section id="home">
            <HomeImage src={Photo}/>
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
        </Section>
    );
}

export default Home;