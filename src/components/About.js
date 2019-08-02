import React from "react"
import styled, { keyframes } from "styled-components"

const About = () => {
  return (
    <Wrapper>
      <Inner>
        <Content>
          <Profile>
            <Avater>
              <AvaterThumb />
            </Avater>
            <Name>MasatoChiba</Name>
            <Position>Frontend Developer</Position>
          </Profile>

          <Social>
            <SocialItem>
              <a
                href="https://twitter.com/nanaki14"
                target="_blank"
                data-text="twitter"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </SocialItem>
            <SocialItem>
              <a
                href="https://www.facebook.com/profile.php?id=100003877097329"
                target="_blank"
                data-text="facebook"
                rel="noopener noreferrer"
              >
                facebook
              </a>
            </SocialItem>
            <SocialItem>
              <a
                href="https://github.com/nanaki14"
                target="_blank"
                data-text="github"
                rel="noopener noreferrer"
              >
                github
              </a>
            </SocialItem>
          </Social>
        </Content>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.article``

const Inner = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  @media (max-width: 767px) {
    border-left: 0;
    border-right: 0;
  }
`

const Content = styled.div`
  padding: 30px 0;
  @media (max-width: 767px) {
    padding: 20px 10px;
  }
`

const Profile = styled.figure`
  padding: 30px 0;
  @media (max-width: 767px) {
    padding: 20px 10px;
  }
`

const avaterAnim = keyframes`
  0% {
    box-shadow: 0 0 0 50px #000 inset;
  }
  30% {
    box-shadow: 0 0 0 0 #000 inset;
  }
  98% {
    box-shadow: 0 0 0 0 #000 inset;
  }
  100% {
    transform: translate(-3px, -2px);
    box-shadow: 0 0 0 0 #000 inset;
  }
`

const Avater = styled.span`
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 0 50px #000 inset;
    animation: 1.2s 0.6s cubic-bezier(0.77, 0, 0.175, 1) ${avaterAnim} both;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 50%;
  }
`

const AvaterThumb = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: url(/avater.jpg) no-repeat center;
  background-size: cover;
  overflow: hidden;
`

const Name = styled.p`
  display: block;
  font-size: 1.4rem;
  color: #000;
  line-height: ${19 / 14};
  text-align: left;
  @media (max-width: 767px) {
    text-align: center;
  }
`

const Position = styled.span`
  display: block;
  font-size: 1rem;
  color: #666666;
  line-height: ${14 / 10};
  text-align: left;
  @media (max-width: 767px) {
    text-align: center;
  }
`

const Social = styled.ul`
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const SocialItem = styled.li`
  margin: 0 0 10px -5px;
  @media (max-width: 767px) {
    margin: 0 5px;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 2px 5px;
    font-size: 1.4rem;
    color: #000;
    line-height: (20/14);
    text-transform: uppercase;
    @media (min-width: 768px) {
      transition: 0.2s ease;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        transform-origin: 0 100%;
        transform: scaleY(0);
        transition: transform 0.2s ease;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        &:after {
          transform-origin: 0 0;
          transform: scaleY(1);
        }
      }
    }
    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  }
`

export default About
