import React from 'react';
import styled from "styled-components";
import Arrow from "../svg/arrow.jsx";
import StyledButton from "../button.jsx";
import SectionImage from "/png/IMAGE-3.png"


const Wrapper = styled.section`
  margin: 100px 0;
  gap: 60px;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  
`

const TextWrapper = styled.div`
  
`
const ButtonArrow = styled(StyledButton)`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    fill: ${props => props.theme.fg_primary};
    transition: 200ms;
  }
  
  &:hover {
    svg {
      fill: ${props => props.theme.accent};
    }
  }
`

const MeetText = styled.h4`
  
`

const Header = styled.h2`
  margin-bottom: 28px;
`
const DescriptionTop = styled.p`
  margin-bottom: 33px;
`

const DescriptionBottom = styled.p`

`

function MeetYourHost() {
    return (
        <Wrapper id="about">
            <TextWrapper>
                <ButtonArrow>
                    <Arrow/>
                </ButtonArrow>
                <MeetText>Meet your host</MeetText>
                <Header>Jacob Paulaner</Header>
                <DescriptionTop>Jacob has a background in audio engineering, and has been podcasting since the early days.</DescriptionTop>
                <DescriptionBottom>He’s here to help you level up your game by sharing everything he’s learned along the way.</DescriptionBottom>
            </TextWrapper>
            <Image src={SectionImage}/>
        </Wrapper>
    );
}

export default MeetYourHost;