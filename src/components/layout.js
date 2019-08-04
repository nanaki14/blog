import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import About from "./About"
import Header from "./Header"
import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <GlobalStyles />
        <Header location={location} />
        <Container>
          <Main>{children}</Main>
          <About />
        </Container>
        <Footer />
      </div>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 96%;
  max-width: 1040px;
  min-height: calc(100% - 65px - 144px);
  margin: 0 auto;
  padding-top: 50px;
  @media (max-width: 767px) {
    display: block;
    width: 94%;
    min-height: calc(100% - 51px - 114px);
    padding-top: 0px;
  }
`

const Main = styled.main`
  order: 2;
  width: calc(100% - 240px);
  margin-left: 40px;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`

export default Layout

const GlobalStyles = createGlobalStyle`
  @import 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css';
  * {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;

  * {
    box-sizing: inherit;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
}

html,
body {
  -webkit-text-size-adjust: 100%;
  width: 100%;
  height: 100%;
  color: #333333;
  font-family: -apple-system, "Noto Sans Japanese", sans-serif;
  font-size: 62.5%;
  font-weight: 300;
  line-height:1;
  letter-spacing: .5px;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: unset;
  @media only screen and(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

article,
aside,
figure,
footer,
header,
section {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style:none;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

table {
  border-collapse:collapse;
  border-spacing:0;
}

th,
td {
  padding: 0;
  text-align: left;
}

a {
  color: inherit;
  text-decoration: none;
}

input, button, textarea, select {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

iframe {
  border: none;
}

`
