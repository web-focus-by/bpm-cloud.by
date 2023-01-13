import * as React from "react"
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

const Contacts = () => {
    const hasWindow = typeof window !== 'undefined';
    const widthScreen = hasWindow ? window.innerWidth : null;
    const [width] = useWindowSize();
    const title = "Проекты";
    const data = [
      {id: 1, text: "Мы открыты для работы над проектами разного масштаба. В короткие сроки можем подключить сформированную команду,"+
      " которая обеспечит высокое качество и скорость работ. К каждому проекту мы сохраняем индивидуальный подход. Уточняем все необходимые"+
      " детали, разрабатываем в соответствии требованиям заказчика, согласованному бюджету и установленным срокам."},
      {id: 2, text: "Мы работаем официально, при запросе можем предоставить полный пакет всех отчетных документов."+
      " Постоянно находимся на связи с вами: начиная от запроса, до реализации и передачи проекта."},
    ]
    const result = data.map((value)=>{
      return (
        <div key={ value.id } className="contacts_description_content">{ value.text }</div>
      )
    })
    const height = widthScreen && widthScreen >= 1920 ? 480 :
    widthScreen >= 1440 && widthScreen < 1920 ? 425 : widthScreen >= 1024 && widthScreen < 1440 ? 302 :
    widthScreen >= 768 && widthScreen < 1024 ? 378 : widthScreen >=374 && widthScreen < 768 ? 378 : 343;

    const map = (
      <div className="contacts margin_bottom_300">
        <div className="contacts__map">
          <div className="projectspng"></div>
          <span className="earth"></span>
        </div>
        <div className="contacts__context">
          <div className="context_description">
            <div className="title_96">
              { title }
            </div>
            { result }
          </div>
        </div>
      </div>
    );

    const mapMini = (
      <div className="contacts margin_bottom_300">
        <div className="contacts__context">
          <div className="context_description">
            <div className="title_96" style={{marginBottom: '32px'}}>
              { title }
            </div>
            { result }
          </div>
        </div>
        <div className="contacts__map">
          <div className="projectspng"></div>
          <span className="earth"></span>
        </div>
      </div>
    )
  
    return (
      <div className="container" id="contacts">
        {width > 768 ? map : mapMini}
      </div>
    )
    
}

export default Contacts