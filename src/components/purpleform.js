import * as React from "react";
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Purpleform = ({ switchContactDialog }) => {
  const title = "Обсудим проект?";
  const buttonText = "Связаться";
  const description = "Мы открыты для общения и всегда остаемся на связи с вами. Готовы обсудить любой ваш проект вне зависимости от его тематики и сложности."
  return (
    <div className="container" id="purpleform">
      <div className="purple_form margin_bottom_300">
        <div className="purple_form__title">
          <div className="purple_form_title">{ title }
        </div>
      </div>
        <div className="purple_form__description">
          <div className="purple_form_description">{ description }</div>
        </div>
        <div className="purple_form__button">
          <div className="white-button" onClick={ switchContactDialog }>{ buttonText }</div>
        </div>
      </div>
    </div>
  )
}

export default Purpleform;