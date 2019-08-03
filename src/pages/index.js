import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/Article"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <Unit>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Article
                key={node.fields.slug}
                title={title}
                date={node.frontmatter.date}
                link={node.fields.slug}
                thumb="https://nanaki.design/wp-content/uploads/2019/05/Artboard-5.png"
              />
            )
          })}
        </Unit>
      </Layout>
    )
  }
}

const Unit = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
