import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import styled from "styled-components"

const Article = ({ title, link, date, thumb }) => {
  return (
    <Wrapper>
      <Link to={link}>
        <Thumb>
          <span style={{ backgroundImage: `url(${thumb})` }} />
        </Thumb>
        <Detail>
          <Title>{title}</Title>
          <Date>
            {() => {
              const execdate = new Date(date)
              return moment(execdate.toISOString()).format("YYYY.MM.DD")
            }}
          </Date>
        </Detail>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  width: calc((100% - 30px) / 2);
  margin-bottom: 30px;
  @media (max-width: 767px) {
    width: calc((100% - 10px) / 2);
    margin-bottom: 20px;
  }
  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
  a {
    display: block;
    height: 100%;
  }
`

const Thumb = styled.figure`
  background-color: #000;
  span {
    display: block;
    padding-bottom: calc(202 / 360 * 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
    @media (max-width: 767px) {
      transition: 0.2s ease-in;
    }
  }
`

const Detail = styled.div`
  padding: 6.5px 0 10px;
  @media (max-width: 767px) {
    padding: 7px 0 10px;
  }
`

const Title = styled.h3`
  margin-bottom: 6.5px;
  font-size: 1.4rem;
  line-height: 1.5;
  @media (max-width: 767px) {
    margin-bottom: 7px;
    font-size: 1.2rem;
  }
`

const Date = styled.span`
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
  line-height: 1;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`

export default Article
