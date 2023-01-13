import * as React from "react"
import PropTypes from "prop-types"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import Rectangle from "../components/rectangle/rectangle"
import useWindowSize from "../utils/useWindowSize"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1440.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Hero = ({ location, contactUs }) => {
  const [width, height] = useWindowSize();
  const titel = "Воплощаем";
  const titel_second = "ваши IT-идеи";
  const subtitle = "Digital-агентство «BPM Cloud» – это комплексный подход к интернет-маркетингу. Под знаменем компании собрались специалисты."
  const bigHero = (
    <div className="hero margin_bottom_300">
      <div className="hero__title">
        <div className="title_96 title">
          { titel }
        </div>
        <div className="subtitle">
          { subtitle }
        </div>
      </div>
      <div className="hero__title_second_part">
        <div className="title_96 title">
          { titel_second } 
        </div>
      </div>
      <div className="hero__butn">
        <button className="button_purple" onClick={ contactUs }>Связаться</button>
      </div>
      <Rectangle />
    </div>
  )

  const miniHero = (
    <div className="hero margin_bottom_300">
      <div className="hero__subtitle">
        <div className="subtitle">
          { subtitle }
        </div>
      </div>
      <div className="hero__title">
        <div className="title_96 title">
          { titel }
        </div>
      </div>
      <div className="hero__title_second_part">
        <div className="title_96 title">
          { titel_second } 
        </div>
      </div>
      <div className="hero__butn">
        <button className="button_purple" onClick={ contactUs }>Связаться</button>
      </div>
      <Rectangle />
    </div>
  )
  return (
    <div className="container" id="hero">
      <Breadcrumbs breadcrumbs={ location } title="Main page"/>
      { width > 768 ? bigHero : miniHero }
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