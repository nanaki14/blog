import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={`/`}>MixDesign</Link>
      </h1>
    )
  } else {
    header = (
      <h2>
        <Link to={`/`}>MixDesign</Link>
      </h2>
    )
  }
  return (
    <Wrapper>
      <Inner>{header}</Inner>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  border-bottom: 1px solid #000;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96%;
  max-width: 1040px;
  min-height: 64px;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 94%;
    min-height: 50px;
  }
  h1,
  h2 {
    font-size: 3rem;
    color: #000;
    font-weight: 200;
    letter-spacing: 1px;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
`

export default Header
