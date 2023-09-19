import React, {useState} from 'react';
import styled from "styled-components";
import StyledButton from "../button.jsx";
import {episodes as episodesMock}  from "../../data/episodes.js";
import Episode from "../episode.jsx";
import episode from "../episode.jsx";


const Wrapper = styled.section`
  margin: 100px 0 160px 0;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

const HeaderText = styled.h2`
  color: ${props => props.theme.fg_primary};
  font-size: 2.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 123.75%;
  letter-spacing: 2.88px;
`

const EpisodesWrapper = styled.ul`
  gap: 60px;
  display: flex;
  flex-direction: column-reverse;
`


function LatestEpisodes() {
    const [episodes, setEpisodes] = useState(episodesMock)
    return (
        <Wrapper id="episodes">
            <Header>
                <HeaderText>Latest episodes</HeaderText>
                <StyledButton>View all episodes</StyledButton>
            </Header>
            <EpisodesWrapper>
                {episodes.map((episode,index) =>
                    <Episode
                        key={index}
                        image={episode.image}
                        tags={episode.tags}
                        header={episode.header}
                        text={episode.description}
                        number={episode.number}
                    />
                )}
            </EpisodesWrapper>
        </Wrapper>
    );
}

export default LatestEpisodes;