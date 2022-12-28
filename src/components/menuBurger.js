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

const MenuBurger = ({ isOpenBurgerMenu, mainItems, allItems, clickOut }) => {
  const [activeMenuItems, setActiveMenuItems] = useState(false);
  const [actualUsingId, setActualUsingId] = useState();
  const menuItemsRef = useRef([]);
  const subsequentsItem = useRef([]);
  const item = [{ id: "", primaryItem:"", subsequentItems: [], },]
  let counter = 0;

  const itemsByMainItems = mainItems.reduce((result, value) => {
    allItems.map((prevValue, i)=>{
      if (prevValue.id === value.id && !prevValue.parentId) {
        item.push({
          id: value.id,
          primaryItem: prevValue.label,
          subsequentItems: [],
        })
        counter++
      } else if (prevValue.parentId && prevValue.parentId === value.id) {
        item[counter].subsequentItems.push(prevValue);
      }
    })
    result = [...result, item];
    return result;
  }, []).slice(5).flat().slice(1);

  const showSubsequentItems = (e) => {
    setActiveMenuItems(!activeMenuItems);
    if (!activeMenuItems) setActualUsingId(e.target.id);
  }

  const showHoverSubsequentItems = useCallback((e) => {
    let subItem = subsequentsItem && subsequentsItem.current
    && subsequentsItem.current.filter(subseqItem => subseqItem && subseqItem.contains(e.target)) ?
    subsequentsItem.current.filter(subseqItem => subseqItem && subseqItem.contains(e.target))[0] : null;
    let currentCase = menuItemsRef && menuItemsRef.current
    && menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target)) ?
    menuItemsRef.current.filter(menuItemRef => menuItemRef && menuItemRef.contains(e.target))[0] : null;
    if (currentCase && menuItemsRef.current.includes(currentCase)) {
      setActualUsingId(currentCase.firstChild.id);
    } else if (subItem && subsequentsItem.current.includes(subItem)) {
      setActualUsingId(subItem.id);
    }
  }, []);

  const isShow = (itemId) => {
    return activeMenuItems && (actualUsingId && actualUsingId === itemId);
  }

  const resultData = itemsByMainItems.map((item, index) => {
    let itemId = item.id;
    let contentMenu = item && item.subsequentItems && item.subsequentItems.length ? item.subsequentItems.map((subValue, ind) => {
      return (
        <li id = { subValue.id } key={ ind }> 
          <Link to={ subValue.path }>{ subValue.label }</Link>
        </li>
      )
    }) : [];
    if (index === 0) {
      return (
        <li key={ index } ref={ el => menuItemsRef.current[index] = el } onClick={ () => { setActiveMenuItems(false); } }>
          <Link id = { itemId } to={ "/" + item.primaryItem.toLowerCase() + "/" }>{ item.primaryItem }</Link>
        </li>
      )
    } else {
      return (
        <li key={ index } ref={ el => menuItemsRef.current[index] = el } onClick={ showSubsequentItems }>
          <a id = { itemId }>{ item.primaryItem }</a>
          <div className="subsequentItem"
            id = { itemId } ref={ el =>  subsequentsItem.current[index] = el }
            style={{ display: isShow(itemId) ? 'block' : 'none' }}
          >
            <ul>{ contentMenu }</ul>
          </div>
        </li>
      )
    }
  });

  useEffect(
    () => {
      menuItemsRef.current = menuItemsRef.current.slice(0, itemsByMainItems.length);
      subsequentsItem.current = subsequentsItem.current.slice(0, itemsByMainItems.length);
      if (activeMenuItems && !clickOut) {
        document.addEventListener("mouseover", showHoverSubsequentItems, true);
      } else {
        document.removeEventListener("mouseover", showHoverSubsequentItems, true);
      }
    }, [itemsByMainItems]
  );
  
  if (isOpenBurgerMenu) {
    return (
      <div className="dropdown_burgermenu_sticky">
        <div className="dropdown_burgermenu">
          <div className="dropdown_burgermenu__info">
            <ul>
              { resultData }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuBurger;