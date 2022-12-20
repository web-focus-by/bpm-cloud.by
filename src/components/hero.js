import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Hero = ({ location }) => {
  return (
    <div className="container">
      <Breadcrumbs breadcrumbs={ location } title="Main page"/>
    </div>
  )
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}
  
Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero