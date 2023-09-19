import React from 'react';
import Rating from "./rating.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${props => props.theme.bg_primary};
  flex: 1 1 30%;
  padding: 50px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Text = styled.p`
  color: ${props => props.theme.fg_primary};
  font-size: 1.63rem;
  line-height: 120%;
`
const Name = styled.span`
  color: ${props => props.theme.fg_secondary};
  line-height: 120%;
  font-size: 1.09rem;
`

function Comment({name, text, rating}) {
    return (
        <Wrapper>
            <Rating rating={rating}/>
            <Text>{text}</Text>
            <Name>{name}</Name>
        </Wrapper>
    );
}

export default Comment;