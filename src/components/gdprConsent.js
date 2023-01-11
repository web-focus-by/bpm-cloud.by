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

const GdprConsent = ({ setCookie }) => {
  const textButton = "Принять";
  const link = <Link className="link_for_cookie" to="#">cookie</Link>;
  return (
    <div className="modal_gdpr">
      <div className="gdpr_consent">
        <div className="gdpr_consent__content">
          <div className="content">Продолжая использовать наш сайт, вы даете согласие на обработку файлов {link}.</div>
        </div>
        <div className="gdpr_consent__confirm">
          <button onClick={ setCookie }>{ textButton }</button>
        </div>
      </div>
    </div>
  )
}

GdprConsent.propTypes = {
  siteTitle: PropTypes.string,
}
      
GdprConsent.defaultProps = {
  siteTitle: ``,
}

export default GdprConsent;