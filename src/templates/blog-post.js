import React from "react"
import moment from "moment"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div>
          <Inner>
            <Head>
              <HeadImage
                style={{
                  backgroundImage: `url(${post.frontmatter.thumb &&
                    post.frontmatter.thumb.childImageSharp.fluid.src})`,
                }}
              />
              <HeadInner>
                <Title>
                  <span>
                    <span>{post.frontmatter.title}</span>
                  </span>
                </Title>
                <Info>
                  <span>
                    {moment(post.frontmatter.date).format("YYYY.MM.DD")}
                  </span>
                </Info>
              </HeadInner>
            </Head>
          </Inner>
        </div>

        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

const animTextBbr = keyframes`
  0% {
    width: 1px;
    height: 0;
  }
  35% {
    width: 1px;
    height: 100%;
  }
  40% {
    width: 1px;
    height: 100%;
  }
  70% {
    width: 100%;
    height: 100%;
    transform: scaleX(1);
  }
  100% {
    width: 100%;
    height: 100%;
    transform: scaleX(0);
  }
`
const animTextMain = keyframes`
  0% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  78% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
`

const Inner = styled.div`
  padding-bottom: 50px;
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
`

const Head = styled.div`
  position: relative;
  margin-bottom: 30px;
  background-color: #151820;
  @media (max-width: 767px) {
    margin-left: -3vw;
    margin-right: -3vw;
  }
`

const HeadImage = styled.div`
  padding-bottom: calc(336 / 600 * 100%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
`

const HeadInner = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
`

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 1.8rem;
  color: #fff;
  line-height: ${27 / 18};
  > span {
    position: relative;
    display: inline-block;
    margin: 0 8px;
    padding: 0 5px;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 0;
      background-color: #333;
      transform-origin: 100% 0;
      animation: 1.5s 0.3s ${animTextBbr} cubic-bezier(0.77, 0, 0.175, 1) both;
    }
    span {
      display: inline-block;
      opacity: 0;
      animation: 1.5s 0.3s ${animTextMain} cubic-bezier(0.77, 0, 0.175, 1) both;
    }
  }
`

const Info = styled.span`
  position: relative;
  display: inline-block;
  padding: 1px 5px 3px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 2px;
  line-height: 1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 0;
    background-color: #333;
    transform-origin: 0 0;
    animation: 1.5s 0.3s ${animTextBbr} cubic-bezier(0.77, 0, 0.175, 1) both;
  }
  span {
    display: inline-block;
    opacity: 0;
    animation: 1.5s 0.3s ${animTextMain} cubic-bezier(0.77, 0, 0.175, 1) both;
  }
`

const Content = styled.div`
  > *:last-child {
    margin-bottom: 0;
  }
  h2 {
    margin: 50px 0 20px;
    font-size: 1.6rem;
    color: $black100;

    line-height: (27/16);
    text-align: center;
    &:after {
      content: "";
      display: block;
      width: 40px;
      height: 2px;
      margin: 10px auto 0;
      background-color: currentColor;
    }
  }
  p {
    margin-bottom: 20px;
    font-size: 1.4rem;
    line-height: (28/14);
  }
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto 20px;
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
        thumb {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
