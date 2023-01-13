import * as React from "react";
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

const AboutCompany = ({siteTitle}) => {
  const title = "О компании";
  const desc = "Мы предоставляем услуги аутсорсинга и аутстаффинга. Накопленная экспертиза позволяет справляться с " +
   "задачами любой сложности и любого технологического стека. Предоставляем, как отдельного специалиста, так и готовую " +
   "команду для работы над проектом. Соблюдаем все обязанности, прописанные в договоре. К каждому заказчику подходим индивидуально.";
  const data = [
    {
      key: "success_projects",
      value: 98,
      class: "projects",
      description:"Успешных проектов"
    },
    {
      key: "an_experience",
      value: 15,
      class: "experience",
      description: " на рынке"
    },
    {
      key: "specialists",
      value: 60,
      class: "specialists",
      description:"Специалист"
    },
    {
      key: "clients",
      value: 25,
      class: "clients",
      description:"Постоянных клиентов"
    },
  ]
  const items = data.reduce((res, item)=>{
    if (item.key === "an_experience") {
      if (item.value < 5) {
        item.description = "Год" + item.description
      } else {
        item.description = "Лет" + item.description
      }
    } else if (item.key === "specialists") {
      if (item.value < 5 && item.value > 1) {
        item.description = item.description + "а";
      } else if (item.value > 4) {
        item.description = item.description + "ов";
      }
    }
    return [...res, item];
  }, []);
  const itemsRes = items.map((val, ind)=>{
    if (ind === 0 || ind === 1) {
      return (
        <div className="about_company_table_item" id={ ind } key={ val.key }>
          <span className="font_144">{ val.value } +</span>
          <p className="font_24" style={{marginTop: '13px'}}>{ val.description }</p>
        </div>
      )
    } else {
      return (
        <div className="about_company_table_item" id={ ind } key={ val.key }>
          <span className="font_144">{ val.value }</span>
          <p className="font_24" style={{marginTop: '13px'}}>{ val.description }</p>
        </div>
      )
    }
  })
  return (
    <div className="container" id="aboutCompany">
      <div className="about_company margin_bottom_300">
        <div className="about_company__title title_96">
          { title }
        </div>
        <div className="about_company__description">
          <div className="description">
            { desc }
          </div>
        </div>
        <div className="about_company__table">
          { itemsRes }
        </div>
      </div>
    </div>
  )
}

AboutCompany.propTypes = {
  siteTitle: PropTypes.string,
}
  
AboutCompany.defaultProps = {
  siteTitle: ``,
}

export default AboutCompany