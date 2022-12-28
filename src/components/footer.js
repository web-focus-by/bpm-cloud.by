import * as React from "react"
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

const Footer =()=>{
  return (
    <div className="container" id="footer">
      <div className="footer">
        <div className="footer__footer_logo">
          <div className="footer_logo"><span className="logo"></span></div>
          <div className="footer_logo"><span className="clutch"></span></div>
        </div>
        <div className="footer__footer_menu">
          <div className="table_menu">
            <div className="table_menu_title">Услуги</div>
            <div className="table_menu_item">Проекты</div>
            <div className="table_menu_item">Блог</div>
            <div className="table_menu_item">Карьера</div>
            <div className="table_menu_item">О компании</div>
          </div>
          <div className="table_menu">
            <div className="table_menu_title">Компания</div>
            <div className="table_menu_item">Проекты</div>
            <div className="table_menu_item">Блог</div>
            <div className="table_menu_item">Карьера</div>
            <div className="table_menu_item">О компании</div>
          </div>
          <div className="table_menu">
            <div className="table_menu_title">Контакты</div>
            <div className="table_menu_item">+375 (29) 32-44-000</div>
            <div className="table_menu_item">info@bpm-cloud.by</div>
            <div className="table_menu_item">Пр-т Независимости, дом 77, офис 53</div>
          </div>
        </div>
        <div className="footer__footer_second_line">
          <div className="social">
            <div className="social_item">LinkedIn</div>
            <div className="social_item">Instagram</div>
            <div className="social_item">Twitter</div>
            <div className="social_item">Behance</div>
            <div className="social_item">Facebook</div>
            <div className="social_item">Telegram</div>
            <div className="social_item">Dribble</div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="copyright_start">© 2010-2021 bpm-cloud.by</div>
          <div className="copyright_end">Политика конфиденциальности</div>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}
            
Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer