import React from 'react';
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
`
const Tag = styled.li`
  font-size: 0.8rem;
  line-height: 150%;
  color: ${props => props.theme.fg_primary};
  background-color: ${props => props.theme.bg_secondary};
  border-radius: 6px;
  padding: 0 16px;
`


function Tags({tags, className}) {
    return (
        <Wrapper className={className}>
            {tags.map((value, index) => <Tag key={index}>{value}</Tag>)}
        </Wrapper>
    );
}

export default Tags;