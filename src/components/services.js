import * as React from "react";
import PropTypes from "prop-types"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Services = () => {
  const title = "Услуги";
  const description = "Нашими услугами являются аутсорсинг и аутстаффинг разработчиков. Мы готовы предложить проверенных программистов " +
  "и IT-команду на проект любой сложности. Можем начать работу как с нуля, так и подключиться по ходу разработки проекта.";
  return (
    <div className="container" id="services">
      <div className="services margin_bottom_300">
        <div className="services__title">
          <div className="title_96">{ title }</div>
          <div className="description">
            { description }
          </div>
        </div>
        <div className="services__context">
            
        </div>
      </div>
    </div>
  );
}

Services.propTypes = {
  siteTitle: PropTypes.string,
}
    
Services.defaultProps = {
  siteTitle: ``,
}

export default Services;