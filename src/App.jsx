
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme} from "./theme.js";
import Header from "./componets/sections/header.jsx";
import Home from "./componets/sections/home.jsx";
import LatestEpisodes from "./componets/sections/latest-episodes.jsx";
import MeetYourHost from "./componets/sections/meet-your-host.jsx";
import ContactForm from "./componets/sections/contact-form.jsx";
import Comments from "./componets/sections/comments.jsx";
import Footer from "./componets/sections/footer.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
  
  html {
    ::-webkit-scrollbar {
      width: 16px;
      
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.bg_secondary};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.fg_primary};
      border-radius: 10px;
      border: 4px solid transparent;
      background-clip: content-box;
      box-sizing: border-box;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.accent};
      border-radius: 10px;
      border: 4px solid transparent;
      background-clip: content-box;
      box-sizing: border-box;
    }
  }
`

const TextStyle = createGlobalStyle`
  h1 {
    letter-spacing: 3.2px;
    font-size: 3.18rem;
    font-weight: 400;
    line-height: 125%;
  }
  
  h2, h3 {
    font-size: 2.9rem;
    font-weight: 400;
  }
  
  h2 {
    letter-spacing: 2.88px;
    line-height: 125%;
  }
  
  h3 {
    letter-spacing: 2.56px;
    line-height: 110%;
  }
  
  h4 {
    color: ${props => props.theme.accent};
    font-size: 0.77rem;
    font-weight: 400;
  }
  
  p {
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 1px;
    color: ${props => props.theme.fg_secondary};
    font-weight: 400;
  }
`

const Main = styled.div`
  background-color: ${props => props.theme.bg_secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.fg_primary};
  }
`

const Wrapper = styled.div`
  max-width: 1400px;
  padding: 40px 50px 100px 50px;
  flex: 1;
`

const ContentLayout = styled.main`
  width: 100%;
`

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Main>
                <Header/>
                <Wrapper>
                    <ContentLayout>
                        <Home/>
                        <LatestEpisodes/>
                        <MeetYourHost/>
                        <ContactForm/>
                        <Comments/>
                    </ContentLayout>
                    <Footer/>
                </Wrapper>
            </Main>
            <GlobalStyle/>
            <TextStyle/>
        </ThemeProvider>
    )
}

export default App
