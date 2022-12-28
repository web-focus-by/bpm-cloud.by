import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1440.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Discuss = ({showDialog}) => {
  const title="Обсудим проект?"
  return (
    <div className="container" id="discuss">
      <div className="discuss margin_bottom_300">
        <div className="discuss_text" onClick={ showDialog }>
          { title }
          <div className="discuss_underline"></div>
        </div>
      </div>
    </div>
  )
}

Discuss.propTypes = {
  siteTitle: PropTypes.string,
}
          
Discuss.defaultProps = {
  siteTitle: ``,
}

export default Discuss

