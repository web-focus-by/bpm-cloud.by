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
          {/* <div className="table_menu">
            <div className="table_menu_title">Услуги</div>
            <div className="table_menu_item">Проекты</div>
            <div className="table_menu_item">Блог</div>
            <div className="table_menu_item">Карьера</div>
            <div className="table_menu_item">О компании</div>
          </div> */}
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
            <Link className="social_item" to="https://www.linkedin.com/company/focus-it-focus/mycompany/">LinkedIn</Link>
            <Link className="social_item" to="https://www.instagram.com/itfocus_/">Instagram</Link>
            <Link className="social_item" to="#">Twitter</Link>
            <Link className="social_item" to="https://www.behance.net/webfocusworld">Behance</Link>
            <Link className="social_item" to="https://www.facebook.com/focus.it1">Facebook</Link>
            <Link className="social_item" to="#">Telegram</Link>
            <Link className="social_item" to="#">Dribble</Link>
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