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

const Technologies = () => {
  const [width, height] = useWindowSize();
  const hasWindow = typeof window !== 'undefined';
  const widthScreen = hasWindow ? window.innerWidth : null;
  const title = "технологии";
  const showAll = "Посмотреть все";
  const desc = "Наши Front-end- и Back-end-разработчики используют такие технологии, как .NET, TypeScript, Laravel, Yii, React"+
  " Native, JavaScript, Vue.js, Symphony, Gatsby.js, Next.js, React.js, Python, Node.js, Angular.js."
  const data = [
    {
      key: "react",
      class: "react",
      description:"React.js and React Native"
    },
    {
      key: "php",
      class: "php",
      description: "PHP"
    },
    {
      key: "c",
      class: "c",
      description:"С++"
    },
    {
      key: "java",
      class: "java",
      description:"Java"
    },
    {
      key: "javaScript",
      class: "javascript",
      description:"JavaScript"
    },
    {
      key: "vue",
      class: "vue",
      description: "Vue.js"
    },
    {
      key: "kotlin",
      class: "kotlin",
      description:"Kotlin"
    },
    {
      key: "swift",
      class: "swift",
      description:"Swift"
    },
  ]
  const items = data.reduce((res, item)=>{
    return [...res, item];
  }, []);
  const itemsRes = items.map((val, ind)=>{
    return (
      <div className="scope_table_item" id={ ind } key={ val.key }>
        <span className={ val.class } style={{marginTop: '46px'}}></span>
        <p className="font_24" style={{marginTop: '13px'}}>{ val.description }</p>
      </div>
    )
  })

  const itemsResMini = items.map((val, ind)=>{
    if (ind < 4) {
      return (
        <div className="scope_table_item" id={ ind } key={ val.key }>
          <span className={ val.class } style={{marginTop: '46px'}}></span>
          <p className="font_24" style={{marginTop: '13px'}}>{ val.description }</p>
        </div>
      )
    }
  })

  const itemsResMicro = items.map((val, ind)=>{
    if (ind < 2) {
      return (
        <div className="scope_table_item" id={ ind } key={ val.key }>
          <span className={ val.class } style={{marginTop: '46px'}}></span>
          <p className="font_24" style={{marginTop: '13px'}}>{ val.description }</p>
        </div>
      )
    }
  })

  return (
    <div className="container" id="scope">
      <div className="scope margin_bottom_300">
        <div className="scope__title">
          <div className="title_96">{ title }</div>
          <div className="show_all">{ showAll }<span className="vector-line"></span>
          <div className="vector" style={{marginBottom: '8px', marginLeft: '-8px'}}></div>
        </div>
        </div>
        <div className="scope__description">
          <div className="description">
            { desc }
          </div>
        </div>
        <div className="scope__table">
          { width < 640 ? itemsResMicro : width <= 768 ? itemsResMini : itemsRes }
        </div>
      </div>
    </div>
  )
}

Technologies.propTypes = {
  siteTitle: PropTypes.string,
}
    
Technologies.defaultProps = {
  siteTitle: ``,
}

export default Technologies;