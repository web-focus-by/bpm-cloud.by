import * as React from "react"
import PropTypes from "prop-types"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Rectangle from "../components/rectangle/rectangle"
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
  const titel = "Воплощаем";
  const titel_second = "ваши IT-идеи";
  const subtitle = "BPM Cloud — аутсорсинг и аутстаффинг талантливых IT-специалистов высокого уровня " +
  "для усиления вашего отдела или масштабирования проекта. Быстро предоставим необходимого специалиста или целую команду.";
  const contactUs = () => {
    return;
  }
  return (
    <div className="container" id="hero">
      <Breadcrumbs breadcrumbs={ location } title="Main page"/>
      <div className="hero">
        <div className="hero__title">
          <div className="title">
            { titel }
          </div>
          <div className="subtitle">
            { subtitle }
          </div>
        </div>
        <div className="hero__title_second_part">
          <div className="title_second">
            { titel_second } 
          </div>
        </div>
        <div className="hero__butn">
          <button className="button_purple" onClick={ contactUs }>Связаться</button>
        </div>
        <Rectangle />
      </div>
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