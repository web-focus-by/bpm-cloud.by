import * as React from "react"
import { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import MenuBurger from "../components/menuBurger"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu {
        menuItems {
          nodes {
            id
            path
            label
            parentId
          }
        }
      }
    }
  `);
  const [isShowThankModal, setIsShowThankModal] = useState(false);
  const [isShowModal, setIsShowModal] = useState(true);
  const [isClickOut, setClickOut] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [isOpen, setModalActive] = useState(false);
  const [selectedItem, setItem] = useState();
  const refMenu = useRef();
  const [isToggle, setToggle] = useState(false);
  
  const allItems = data.wpMenu && data.wpMenu.menuItems &&  data.wpMenu.menuItems.nodes ? data.wpMenu.menuItems.nodes : null;
  
  const allItemsForMenu = allItems.reduce((res, val)=>{
    let item = val.path.slice(1,-1).split("/");
    if( item.length < 3) {
      return [...res, val]
    }
    return res;
  },[]);

  const mainItems = allItemsForMenu.reduce(
    (result, value) => {
      if (value.path.slice(1, -1).split("/").length === 1) {
        result.push({ id: value.id, path: value.path, label: value.label });
      }
      return result;
    },[]
  );

  const closeOpenMenu = (e) => {
    setClickOut(false);
    setToggle(!isToggle);
    setItem(e);
  }

  const onlyTurnOnMenu = (e) => {
    setToggle(true);
    setItem(e);
  }

  const closeMenu = () => {
    setToggle(false);
    setIsOpenBurgerMenu(false);
  }

  const clickOut = (e) => {
    if (refMenu && refMenu.current && !refMenu.current.contains(e.target)) {
      setClickOut(true);
      closeMenu();
    }
  }

  const openCloseMenu = (e) => {
    setClickOut(false);
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
    setItem(e);
  }

  useEffect(
    () => {
      document.addEventListener("click", clickOut, true);
      return () => {
        document.removeEventListener("click", clickOut, true);
      };
    }, []
  );

  const showThankFormModal = () => {
    setIsShowModal(false);
    setIsShowThankModal(true);
  }

  const backPageModal = () => {
    setIsShowModal(true);
    setIsShowThankModal(false);
    setModalActive(true);
  }

  return (
    <>
      <div className="header" ref={ refMenu }>
        <Header
          turnOnMenu={ closeOpenMenu }
          mainItems={ mainItems }
          clickOut = { isClickOut }
          justTurnOnMenu={ onlyTurnOnMenu }
          justTurnOffMenu={ closeMenu }
          openCloseMenu={ openCloseMenu }
        />
        <MenuBurger
          isOpenBurgerMenu = { isOpenBurgerMenu }
          mainItems={ mainItems }
          allItems={ allItemsForMenu }
          clickOut = { isClickOut }
        />
      </div>
      { children }
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
  
export default Layout