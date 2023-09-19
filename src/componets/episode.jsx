import React from 'react';
import styled from "styled-components";
import Tags from "./tags.jsx";
import StyledButton from "./button.jsx";

const Wrapper = styled.li`
  width: 100%;
  //height: 545px;
  background-color: ${props => props.theme.bg_primary};
  border-radius: 32px;
  display: flex;
  padding: 40px;
  gap: 53px;
`

const TagsMargin = styled(Tags)`
  margin-bottom: 48px;
`

const Image = styled.img`
  height: 432px;
  width: auto;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8px;
`

const EpisodeNumber = styled.h4`
  color: ${props => props.theme.accent};
  font-size: 0.77rem;
  font-weight: 400;
  margin-bottom: 18px;
`

const Header = styled.h3`
  margin-bottom: 28px;
`

const Description = styled.p`
  margin-bottom: 18px;
  flex: 1;
`

function Episode({header, text, number, tags, image}) {
    return (
        <Wrapper>
            <Image src={image}/>
            <TextWrapper>
                <TagsMargin tags={tags}/>
                <EpisodeNumber>Episode {number}</EpisodeNumber>
                <Header>{header}</Header>
                <Description>{text}</Description>
                <StyledButton>View Episode Details</StyledButton>
            </TextWrapper>
        </Wrapper>
    );
}

export default Episode;