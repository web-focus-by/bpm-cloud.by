import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Tooltip } from '@mui/material'
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

const Team = () => {
  const [width, height] = useWindowSize();
  const title = "Команда";
  const showAll = "Посмотреть все";
  const desc ="         Мы – коллектив единомышленников. Для каждого из нас важно выполнить задачу в оговоренные с клиентом сроки. IT-компания «Focus IT» – это профессионалы своего дела, заточенные на максимально приятный для клиента результат.";
  const data = [
    {
      id: 1,
      name: "Юрий",
      photo: "photo1",
      link: "#"
    },
    {
      id: 2,
      name: "Катерина Кукса",
      photo: "photo2",
      link: "#"
    },
    {
      id: 3,
      name: "",
      photo: "photo7",
      link: "#"
    },
    {
      id: 4,
      name: "",
      photo: "",
      link: "#"
    },
    {
      id: 5,
      name: "Екатерина",
      photo: "photo3",
      link: "#"
    },
    {
      id: 6,
      name: "",
      photo: "",
      link: "#"
    },
    {
      id: 7,
      name: "",
      photo: "photo7",
      link: "#"
    },
    {
      id: 8,
      name: "Александр",
      photo: "photo4",
      link: "#"
    },
    {
      id: 9,
      name: "Ян",
      photo: "photo5",
      link: "#"
    },
    {
      id: 10,
      name: "",
      photo: "photo7",
      link: "#"
    },
    {
      id: 11,
      name: "",
      photo: "",
      link: "#"
    },
    {
      id: 12,
      name: "",
      photo: "photo7",
      link: "#"
    },
    {
      id: 13,
      name: "",
      photo: "photo7",
      link: "#"
    },
    {
      id: 14,
      name: "",
      photo: "photo7",
      link: "#"
    },
    {
      id: 15,
      name: "Ксения",
      photo: "photo6",
      link: "#"
    },
  ];

  const itemsResMini = data.map((val, ind)=>{
    if (ind < 8) {
      return (
        <Tooltip title={ val.name } placement="bottom-end" style={{color: '#333', background: '#0773DF'}} >
          <div className="team_table_item" id={ ind } key={ val.key }>
            <span className={ val.photo }><Link to={ val.link }></Link></span>
          </div>
        </Tooltip>
      )
    }
  })

  const itemsRes = data.map((val, ind)=>{
    if(ind!==11){
      return (
        <Tooltip title={ val.name } placement="bottom-end" >
          <div className="team_table_item" id={ ind } key={ val.key }>
            <span className={ val.photo }><Link to={ val.link }></Link></span>
          </div>
        </Tooltip>
      )
    }else{
      return (
        <div className="team_table_item" id="11" key="11">
            <Link to="#" style={{textDecoration: 'none'}}>
              <div className="custom">
                <div className="custom-text">50+</div>
              </div>
            </Link>
        </div>
      )
    }

  })

  return (
    <div className="container" id="team">
      <div className="team margin_bottom_300">
        <div className="team__title">
          <div className="title_96">{ title }</div>
          <div className="team_show_all">{ showAll }<span className="vector-line"></span>
            <div className="vector" style={{marginBottom: '8px', marginLeft: '-8px'}}></div>
          </div>
        </div>
        <div className="team__description">
          <div className="team_description">
            { desc }
          </div>
        </div>
        <div className="team__table">
          { width > 640 ? itemsRes : itemsResMini }
          {/* <div className="team_table_item" id="15" key="16">
            <Link to="#" style={{textDecoration: 'none'}}>
              <div className="custom">
                <div className="custom-text">50 +</div>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

Team.propTypes = {
  siteTitle: PropTypes.string,
}
      
Team.defaultProps = {
  siteTitle: ``,
}

export default Team