import * as React from "react"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
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

const Portfolios = () => {
  const [width, height] = useWindowSize();
  const title = "Проекты";
  const showAll = "Посмотреть все";
  const shortDiscription = "Digital-агентство «BPM Cloud» – это комплексный подход к интернет-маркетингу. Под знаменем компании собрались специалисты."
  const data = [
    {
      id: 1,
      link: '#',
      name: 'Разработка мобильного приложения',
      description: 'Digital-агентство «BPM Cloud» – это комплексный подход к интернет-маркетингу. Под знаменем компании собрались специалисты.',
      class: 'portfolio1',
    },
    {
      id: 2,
      link: '#',
      name: 'Разработка мобильного приложения',
      description: 'Digital-агентство «BPM Cloud» – это комплексный подход к интернет-маркетингу. Под знаменем компании собрались специалисты.',
      class: 'portfolio2',
    },
    {
      id: 3,
      link: '#',
      name: 'Разработка мобильного приложения',
      description: 'Digital-агентство «BPM Cloud» – это комплексный подход к интернет-маркетингу. Под знаменем компании собрались специалисты.',
      class: 'portfolio1',
    },
    {
      id: 4,
      link: '#',
      name: 'Разработка мобильного приложения',
      description: 'Digital-агентство «BPM Cloud» – это комплексный подход к интернет-маркетингу. Под знаменем компании собрались специалисты.',
      class: 'portfolio2',
    }
  ];

  const result = data.map((value, index) => {
    if (index < 2) {
      return (
        <Link className="portfolios_description" to={value.link} id={ value.id } key={ value.id }>
          <div className="portfolios_description_title">{ value.name }
            <p>{ value.description }</p>
          </div>
          <div className="portfolios_description_img"><div className={value.class}></div></div>
        </Link>
      )
    }
  });

  const resultMini = data.map((value, index) => {
    if (index < 2) {
      return (
        <Link className="portfolios_description" to={value.link} id={ value.id } key={ value.id }>
          <div className="portfolios_description_img"><div className={value.class}></div></div>
          <div className="portfolios_description_title">{ value.name }
            <p>{ value.description }</p>
          </div>
        </Link>
      )
    }
  })

  return (
    <div className="container" id="portfolios">
      <div className="portfolios margin_bottom_300">
        <div className="portfolios__title">
          <div className="title_96">{ title }</div>
          {/* <div className="portfolios_show_all">{ showAll }<span className="vector-line"></span>
            <div className="vector" style={{marginBottom: '8px', marginLeft: '-8px'}}></div>
          </div> */}
        </div>
        <div className="portfolios__short_disciption">
          <div className="short_disciption">{ shortDiscription }</div>
        </div>
        <div className="portfolios__description">
          { width > 768 ? result : resultMini }
        </div>
      </div>
    </div>
  )
}

Portfolios.propTypes = {
  siteTitle: PropTypes.string,
}
      
Portfolios.defaultProps = {
  siteTitle: ``,
}

export default Portfolios;