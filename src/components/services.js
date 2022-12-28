import * as React from "react";
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

const Services = () => {
  const hasWindow = typeof window !== 'undefined';
  const widthScreen = hasWindow ? window.innerWidth : null;
  const dataText = [
    { link: "/services/outsourcing/outsourcing-backend-developers/", name: "Back-End Разработка" },
    { link: "/services/outsourcing/outsourcing-frontend-developers/", name: "Front-End Разработка" },
    { link: "/services/outsourcing/outsourcing-ux-ui-designers/", name: "UX/UI-дизайн" },
    { link: "/services/outsourcing/outsourcing-manu…utomated-testing/", name: "QA" },
    { link: "/services/outsourcing/outsourcing-business-and-systems-analysts/", name: "Бизнес анализ" },
  ];

  const itemsText = dataText.map((value, index) => {
    return (
      <li id={ index } key={ index }>
        <div className="services_context">
          <Link className="services_context_link" to={ value.link }>{ value.name }</Link>
        </div>
      </li>
    )
  });

  const title = "Услуги";
  const description = "Нашими услугами являются аутсорсинг и аутстаффинг разработчиков. Мы готовы предложить проверенных программистов " +
  "и IT-команду на проект любой сложности. Можем начать работу как с нуля, так и подключиться по ходу разработки проекта.";

  return (
    <div className="container" id="services">
      <div className="services margin_bottom_300">
        <div className="services__title">
          <div className="title_96">
            { title }
          </div>
          <div className="description">
            { description }
          </div>
        </div>
        <div className="services__context">
          <ul>
            { itemsText }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;