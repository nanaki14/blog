import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

import About from "./About"
import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <GlobalStyles />
        <header>{header}</header>
        <main>{children}</main>
        <About />
        <Footer />
      </div>
    )
  }
}

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
