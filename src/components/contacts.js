import * as React from "react"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Contacts = () => {
    const title = "Контакты";
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
    return (
      <div className="container" id="portfolios">
        <div className="contacts margin_bottom_300">
          <div className="contacts__map">
            <iframe
              title="address of office on google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.544970835492!2d27.596358815992996!3d53.9220613391322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf5d99239d81%3A0x9abeb6f83c6393fb!2z0L_RgC4g0J3QtdC30LDQstC40YHQuNC80L7RgdGC0LggNzcsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1664284593785!5m2!1sru!2sby"
              width="100%" height="480"
              style={{border:0,borderRadius:0}} allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <span className="earth"></span>
          </div>
          <div className="contacts__context">
            <div className="context_description">
              <div className="contacts_description_title">
                { title }
              </div>
              { result }
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contacts