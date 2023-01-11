import * as React from "react"
import { useRef, useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1440.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Header = ({ turnOnMenu, mainItems, clickOut, justTurnOnMenu, justTurnOffMenu, openCloseMenu }) => {
  const hasWindow = typeof window !== 'undefined';
  const widthScreen = hasWindow ? window.innerWidth : null;
  const refHeader = useRef();
  const refHeaderBurger = useRef();
  const menuItemsRef = useRef([]);
  const phone = '+375 (29) 32 44 000';
  const [isTurnOn, setIsTurnOn] = useState(false);
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  }
  const activeMenu = (e) => {
    turnOnMenu(e.target.innerText);
    if (!(clickOut && isTurnOn)) {
      setIsTurnOn(!isTurnOn);
    }
  }
  const activeMenuBurger = (e) => {
    openCloseMenu(e.target.innerText);
  }
  const homeUrl = url ? url.origin : '';
  const menuItems = mainItems.map((item, index) => {
    if (index === 0) {
      return (
        <li id = { item.id } ref={ el => menuItemsRef.current[index] = el } key={ index } onClick={()=>{ setIsTurnOn(!isTurnOn); }}>
          <Link to={ homeUrl + item.path }>{ item.label }<span className="vector_down"></span></Link>
        </li>
      )
    } else {
      if (index === 2) {
        return (
          <li id = { item.id } ref={ el => menuItemsRef.current[index] = el } key={ index } onClick={ activeMenu } >
            <a>{ item.label }<span className="vector_down"></span></a>
          </li>
        )
      } else {
        return (
          <li id = { item.id } ref={ el => menuItemsRef.current[index] = el } key={ index } onClick={ activeMenu } >
            <a>{ item.label }</a>
          </li>
        )
      }
    }
  });

  const movingMouse = useCallback((e) => {  
    let currentCase = menuItemsRef && menuItemsRef.current && menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target)) ?
    menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target))[0] : null;
    if (currentCase && menuItemsRef.current.includes(currentCase)) {
      if (e.target.innerText !== 'Portfolios') {
        justTurnOnMenu(e.target.innerText);
        return;
      } else if (e.target.innerText === 'Portfolios') {
        justTurnOffMenu();
        return;
      }
    }
   }, []);

  useEffect(
    () => {
      menuItemsRef.current = menuItemsRef.current.slice(0, mainItems.length);
      if (isTurnOn && !clickOut) {
        document.addEventListener("mouseover", movingMouse, true);
      } else {
        document.removeEventListener("mouseover", movingMouse, true);
      }
    }, [mainItems]
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div style={{ paddingBottom: '20px' }} className="header_logo">
            <Link to={ homeUrl }>
              <span className="logo"></span>
            </Link>
          </div>
          <div className="header_nav_list" ref={ refHeader } >
            <ul>
              { menuItems }
            </ul>
          </div>
          <div className="header_phone">
            <a href="tel:+375293244000">{ phone }</a>
          </div>
          <div className="burger" ref={ refHeaderBurger } onClick={ activeMenuBurger }></div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
  
export default Header