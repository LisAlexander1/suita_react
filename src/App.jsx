
import styled, {ThemeProvider} from "styled-components";
import {theme} from "./theme.js";
import LayoutWrapper from "./componets/layout-wrapper.jsx";
import Header from "./componets/header.jsx";
import Home from "./componets/sections/home.jsx";

const Main = styled.main`
  background-color: ${props => props.theme.bg_secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.fg_primary};
`

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Main>
                <Header/>
                <LayoutWrapper>
                    <Home/>
                </LayoutWrapper>
            </Main>
        </ThemeProvider>
    )
}

export default App
