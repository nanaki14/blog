import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <Copy>© {new Date().getFullYear()} Masato Chiba</Copy>
      </Inner>
    </Wrapper>
  )
}


const Wrapper = styled.footer`
  margin-top: 80px;
  background-color: #000;
  @media (max-width: 767px) {
    margin-top: 50px;
  }
`

const Inner = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96%;
  max-width: 1040px;
  min-height: 64px;
  margin: 0 auto;
  padding: 23px 0 13px;
`

const Copy = styled.small`
  font-size: 1rem;
  color: #fff;
  line-height: ${13/10};
`

export default Footer