import React from "react"
import { graphql } from "gatsby"

export default function Home() {
  return <div>hello world</div>
}

export const qurey = graphql`
  query {
    allContentfulBlogPosts {
      edges {
        node {
          publicationDate
          userName
          updatedAt
          userImage {
            file {
              url
            }
          }
          title
          image {
            file {
              url
            }
          }
          content {
            content
          }
        }
      }
    }
  }
`
