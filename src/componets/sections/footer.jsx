import React from 'react';
import styled from "styled-components";
import Logo from "../svg/logo.jsx";
import TwitterLogo from "../svg/twitter-logo.jsx";
import InstagramLogo from "../svg/instagram-logo.jsx";
import FacebookLogo from "../svg/facebook-logo.jsx";
import Links from "../links.jsx";

const Wrapper = styled.footer`
  margin: 100px 0 0 0;
  max-width: 1300px;
  width: 90vw;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
`
const SocialWrapper = styled.div`
    display: flex;
    gap: 10px;

    svg {
      stroke: ${props => props.theme.fg_primary};
      transition: 200ms;
      &:hover {
        stroke: ${props => props.theme.accent};
        transform: scale(1.1);       
      }
    }
`

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  
  li {
    transition: padding-left 200ms;
  }

  li:hover {
    padding-left: 0.5rem;
    a {
      color: ${props => props.theme.accent};
      
    }
  }
  
  a {
    color: ${props => props.theme.fg_primary};
    text-decoration: none;
    font-size: 0.77rem;
    line-height: 160%;
    transition: 200ms;
  }
`

const StyledLogo = styled(Logo)`
  fill: ${props => props.theme.fg_primary};
  margin-bottom: 20px;
`
function Footer(props) {
    return (
        <Wrapper>
            <div>
                <StyledLogo/>
                <SocialWrapper>
                    <TwitterLogo/>
                    <InstagramLogo/>
                    <FacebookLogo/>
                </SocialWrapper>
            </div>
            <LinkList>
                <li><a href="#home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Episodes">Episodes</a></li>
                <li><a href="#Contact">Contact</a></li>
            </LinkList>
            <LinkList>
                <li><a>Style Guide</a></li>
                <li><a>Instructions</a></li>
                <li><a>Changelog</a></li>
                <li><a>Credit</a></li>
                <li><a>Powered by Webflow</a></li>
                <li><a>Licenses</a></li>
            </LinkList>
            <Links/>
        </Wrapper>
    );
}

export default Footer;