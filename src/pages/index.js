import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ location }) => {
  const [isShowThankModal, setIsShowThankModal] = React.useState(false);
  const [isShowModal, setIsShowModal] = React.useState(true);
  const [isShowThankForm, setIsShowThankForm] = React.useState(false);
  const [isShowForm, setIsShowForm] = React.useState(true);
  const postsAndTags = useStaticQuery(graphql`
    query GetPostQuery {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "portfolios"}}}}}) {
        edges {
          node {
            id
            title
            link
            content
            tags {
              nodes {
                slug
              }
            }
            featuredImage {
              node {
                id
                mediaItemUrl
                sizes
              }
            }
          }
        }
      }
    }
  `);
  const allPosts = postsAndTags ? postsAndTags.allWpPost.edges : [];

  const backPageModal = () => {
    setIsShowThankForm(false);
  }

  const backPage = () => {
    setIsShowThankModal(false);
    setIsShowForm(true);
  }

  const showThankForm = () => {
    setIsShowThankForm(true);
    setIsShowForm(false);
  }

  return (
    <>
      <Layout>
        <Seo title="Index" />
        <Hero location={ location }></Hero>
      </Layout>
    </>
  )
}

export default IndexPage