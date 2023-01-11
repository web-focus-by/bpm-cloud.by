import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1440.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const ThanksModal = ({backPageModal}) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '25%',
    width: '305px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '150%',
    textAlign: 'center',
    color: '#FFFFFF'
  }
  return (
    <React.Fragment>
      <div className="modal thanks_modal">
        <div className="form_block_modal_button" onClick={ backPageModal }></div>
        <div className="modal__content thanks_modal_content">
          <div className="form">
            <div className="form__block">
              <div className="form_block_title">Спасибо за заявку!</div>
              <div className="form_block_wrapper">
                <p style={ style }>Наш менеджер рассмотрит заявку в ближайшее время.</p>
                <form id="search-form">
                  <div className="form_block_send" style={{ marginTop: '46px'}}>
                    <div className="earth" style={{marginLeft:'35%'}} onClick={ backPageModal }></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

ThanksModal.propTypes = {
  siteTitle: PropTypes.string,
}
    
ThanksModal.defaultProps = {
  siteTitle: ``,
}

export default ThanksModal;