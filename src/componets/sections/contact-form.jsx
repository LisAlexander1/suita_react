import React from 'react';
import styled from "styled-components";
import StyledButton from "../button.jsx";
import SvgLinesBottom from "../svg/svg-lines-bottom.jsx";

const Wrapper = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
  background: ${props => props.theme.bg_primary};
  border-radius: 32px;
  padding: 60px;
`
const TextWrapper = styled.div`
  align-self: flex-start;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 522px;
  align-items: flex-start;
`

const Input = styled.input`
  border: none;
  width: 100%;
  border-radius: 6px;
  background-color: ${props => props.theme.bg_secondary};
  padding: 19px;
  height: 3.7rem;
  font-size: 1.1rem;
  color: ${props => props.theme.fg_secondary};
`

const Lines = styled(SvgLinesBottom)`
  fill: ${props => props.theme.accent};
  position: absolute;
  left: -38px;
  bottom: -26px;
`
function ContactForm() {
    return (
        <Wrapper id="contact">
            <TextWrapper>
                <h4>Email Newsletter</h4>
                <h2>Subscribe<br/> for updates</h2>
            </TextWrapper>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Name" type="text"/>
                <Input placeholder="Email" type="email"/>
                <StyledButton>Submit</StyledButton>
            </Form>
            <Lines/>
        </Wrapper>
    );
}

export default ContactForm;