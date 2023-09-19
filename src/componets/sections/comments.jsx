import React, {useState} from 'react';
import styled from "styled-components";
import Comment from "../comment.jsx";
import {comments as commentsMock} from "../../data/comments.js";

const Wrapper = styled.section`
  margin: 100px 0;
  display: grid;
  flex-wrap: wrap;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
`
function Comments() {
    const [comments, setComments] = useState(commentsMock);
    return (
        <Wrapper>
            {
                comments.map((comment, index) =>
                    <Comment key={index} name={comment.name} text={comment.comment} rating={comment.rating}/>)
            }
        </Wrapper>
    );
}

export default Comments;