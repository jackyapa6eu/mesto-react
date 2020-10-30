import React from 'react'

function PopupWithForm(props) {
  const openedPopupSelector = props.isOpen ? "popup_opened" : '';
  return (
    <>
    <div className={`popup popup_type_${props.name} ${openedPopupSelector}`}>
      <form className={`popup__form popup__form_type_${props.name}`} name={props.name} noValidate>
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
      </form>
    </div>
    </>
  )
}

export default PopupWithForm;