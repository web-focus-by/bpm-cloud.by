import * as React from "react"
import { useRef, useState } from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"
import useWindowSize from "../utils/useWindowSize"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1440.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $name: String!
    $email: String!
    $additionalInformation: String!
  ) {
    createSubmission(
      input: {
        name: $name
        email: $email
        additionalInformation: $additionalInformation
      }
    ) {
      success
      data
    }
  }`

const Modal = ({onClickClose, showThankForm}) => {
    const [createSubmission, { loading, error, data }] = useMutation(CONTACT_MUTATION);
    const [nameValue, setNameValue] = useState('');
    const [additionalInformation, setAdditionalInformation] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [width, height] = useWindowSize();

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    const submitBlock = (
      <div className="form_block_send">
        <p>Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
        <button className="button_black" disabled = { !additionalInformation || !emailValue || !nameValue } type="submit">Отправить</button>
      </div>
    )

    const submitBlock373 = (
      <div className="form_block_send">
        <button className="button_black" disabled = { !additionalInformation || !emailValue || !nameValue } type="submit">Отправить</button>
        <p>Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
      </div>
    )

    return(
      <React.Fragment>
      <div className="modal">
        <div className="modal__content">
          <div className="form">
            <div className="form__block">
              <div className="form_block_title">Оставьте заявку</div>
              <div className="form_block_wrapper">
                <form id="search-form"
                  onSubmit={ e => {
                    e.preventDefault();
                      createSubmission({
                        variables: {
                          name: nameValue,
                          email: emailValue,
                          additionalInformation: additionalInformation, 
                        }
                      });
                      showThankForm();
                    }
                  }>
                  <div className="form_line-wrapper">
                    <input
                      id="name"
                      value = { nameValue }
                      type="text"
                      autoComplete="off"
                      name="name"
                      className="form_name input-yellow "
                      onChange={ e => {
                        setNameValue(e.target.value)
                      }}
                      required />
                    <label>Имя</label><span className="little_star"></span>
                  </div>
                  <div className="form_line-wrapper">
                    <input
                      value = { emailValue }
                      type="text"
                      id="mail"
                      autoComplete="off"
                      name="email"
                      className="form-mail input-mail form_mail input-yellow"
                      onChange={ e => {
                        setEmailValue(e.target.value)
                      }}
                      required />
                    <label>E-mail</label><span className="little_star"></span>
                  </div>
                  <div className="form_line-wrapper">
                    <input
                      type="text"
                      value = { additionalInformation }
                      id="additionalInformationValue"
                      autoComplete="off"
                      name="additionalInformationValue"
                      className="form-phone input-phone form_phone input-yellow"
                      onChange={ e => {
                        setAdditionalInformation(e.target.value)
                      }}
                      required />
                    <label>Дополнительная информация</label><span className="little_star"></span>
                  </div>
                  { width > 373 ? submitBlock : submitBlock373 }
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="form_block_modal_button_cross">
          <div className="form_block_modal_button" onClick={ onClickClose }></div>
        </div>
      </div>
      </React.Fragment>
  )
}

Modal.propTypes = {
  siteTitle: PropTypes.string,
}
  
Modal.defaultProps = {
  siteTitle: ``,
}

export default Modal;