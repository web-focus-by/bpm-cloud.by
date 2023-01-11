import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import AboutCompany from "../components/aboutCompany"
import Services from "../components/services"
import Purpleform from "../components/purpleform"
import Scope from "../components/scope"
import Technologies from "../components/technologies"
import Portfolios from "../components/portfolios"
import Contacts from "../components/contacts"
import Team from "../components/team"
import Blog from "../components/blog"
import Discuss from "../components/discuss"
import Modal from "../components/modal"
import ThanksModal from "../components/thanksModal"
import GdprConsent from "../components/gdprConsent"

const IndexPage = ({ location }) => {
  const [isShowThankModal, setIsShowThankModal] = useState(false);
  const [isOpen, setModalActive] = useState(false);
  const [isShowGdpr, setIsShowGdpr] = useState(true);
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

  const backPage = () => {
    setIsShowThankModal(false);
    setModalActive(false);
  }
  const showThankModal = () => {
    setModalActive(false);
    setIsShowThankModal(true);
  }
  const toggleModalActive = () => {
    setModalActive(true);
  }
  const closeDialog = () => {
    setModalActive(false);
    setIsShowThankModal(false);
  }
  const setCookie = () => {
    setIsShowGdpr(false);
  }

  return (
    <>
      <Layout>
        <Seo title="Index" />
        { isShowGdpr ? <GdprConsent setCookie={ setCookie }></GdprConsent> : null }
        { isOpen ? <Modal onClickClose={ closeDialog } showThankForm = { showThankModal }></Modal> : null}
        { isShowThankModal ? <ThanksModal backPageModal = { backPage }></ThanksModal> : null}
        <Hero location={ location } contactUs = { toggleModalActive }></Hero>
        <AboutCompany />
        <Services />
        <Purpleform switchContactDialog = { toggleModalActive }></Purpleform>
        <Scope />
        <Portfolios />
        <Technologies />
        <Contacts />
        <Team />
        <Blog />
        <Discuss showDialog={ toggleModalActive }/>
      </Layout>
    </>
  )
}

export default IndexPage