import React from 'react'

function ImagePopup(props) {
  let openedPopupSelector = props.isOpen ? 'popup_opened' : '';
  return (
    <div className={`popup popup_type_figure ${openedPopupSelector}`}>
      <figure className="popup__figure">
        <button type="button" className="popup__close-button" onClick={props.onClose}/>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;