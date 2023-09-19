import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.accent};
  border-radius: 6px;
  color: ${props => props.theme.fg_primary};
  border: none;
  padding: 12px 15px 12px 20px;
  font-size: 0.8rem;
  font-family: inherit;
  transition: 200ms;
  
  
  &:hover {
    background-color: ${props => props.theme.fg_primary};
    color: ${props => props.theme.accent};
  }
  
  &:active {
    background-color: ${props => props.theme.fg_secondary};
  }
`
export default StyledButton;