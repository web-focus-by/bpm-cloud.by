import * as React from "react"
import PropTypes from "prop-types"
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

const Scope = () => {
  const hasWindow = typeof window !== 'undefined';
  const widthScreen = hasWindow ? window.innerWidth : null;
  const [width, height] = useWindowSize();
  const title = "Сферы";
  const showAll = "Посмотреть все";
  const desc = "Опыт наших сотрудников может успешно использоваться в разных индустриях: FinTech, Gamedev, e-commerce, MedTech"+
  " и многих других. Мы быстро адаптируемся под требования заказчика и оперативно решаем поставленные задачи.";
  const data = [
    {
      key: "financeBaking",
      class: "financeBaking",
      description:"Finance&Baking"
    },
    {
      key: "education",
      class: "education",
      description: "Education"
    },
    {
      key: "health",
      class: "health",
      description:"Health Care"
    },
    {
      key: "restaurants",
      class: "restaurants",
      description:"Restaurants"
    },
    {
      key: "entertrainment",
      class: "entertrainment",
      description:"Entertrainment"
    },
    {
      key: "tnc",
      class: "tnc",
      description: "Transnational Corporations"
    },
    {
      key: "government",
      class: "gov",
      description:"Government"
    },
    {
      key: "retail",
      class: "",
      description:"+7 сфер"
    },
  ]
  const items = data.reduce((res, item)=>{
    return [...res, item];
  }, []);

  const itemsResMicro = items.map((val, ind)=>{
    if ( ind < 2) {
      return (
        <div className="scope_table_item" id={ ind } key={ val.key }>
          <div className="scope_table_item_container">
            <span className={ val.class }></span>
            <p className="font_24" style={{marginTop: '30px'}}>{ val.description }</p>
          </div>
        </div>
      )
    }
  })

  const itemsResMini = items.map((val, ind)=>{
    if ( ind < 4) {
      return (
        <div className="scope_table_item" id={ ind } key={ val.key }>
          <div className="scope_table_item_container">
            <span className={ val.class }></span>
            <p className="font_24" style={{marginTop: '30px'}}>{ val.description }</p>
          </div>
        </div>
      )
    }
  })

  const itemsRes = items.map((val, ind)=>{
    return (
      <div className="scope_table_item" id={ ind } key={ val.key }>
        <div className="scope_table_item_container">
          <span className={ val.class }></span>
          <p className="font_24" style={{marginTop: '30px'}}>{ val.description }</p>
        </div>
      </div>
    )
  })

  return (
    <div className="container" id="scope">
      <div className="scope margin_bottom_300">
        <div className="scope__title">
          <div className="title_96">{ title }</div>
          {/* <div className="show_all">{ showAll }
            <span className="vector-line"></span>
            <div className="vector" style={{marginBottom: '8px', marginLeft: '-8px'}}></div>
          </div> */}
        </div>
        <div className="scope__description">
          <div className="description">
            { desc }
          </div>
        </div>
        <div className="scope__table">
          { width < 531 ? itemsResMicro : width <= 768 ? itemsResMini : itemsRes }
        </div>
      </div>
    </div>
  )
}

Scope.propTypes = {
  siteTitle: PropTypes.string,
}
    
Scope.defaultProps = {
  siteTitle: ``,
}

export default Scope;