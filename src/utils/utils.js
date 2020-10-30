import React from 'react'

const popupAddPlaceContent =       
  <>
    <input type="text" name="name" className="popup__input popup__input_type_place-name" id="place-name-input" placeholder="Название" required minLength="2" maxLength="30"/>
    <span className='popup__error popup__error_visible' id="place-name-input-error"></span>
    <input type="url" name="link" className="popup__input popup__input_type_place-link" id="place-link-input" placeholder="Ссылка на картинку" required />
    <span className='popup__error popup__error_visible' id="place-link-input-error"></span>
    <button type="submit" className="popup__button">Создать</button>  
  </>

const popupEditProfileContent = 
  <>
    <input type="text" name="name" className="popup__input popup__input_type_display-name" id="profile-display-name-input" required minLength="2" maxLength="40"/>
    <span className='popup__error popup__error_visible' id="profile-display-name-input-error"></span>
    <input type="text" name="about" className="popup__input popup__input_type_profession" id="profile-profession-input" required minLength="2" maxLength="200"/>
    <span className='popup__error popup__error_visible' id="profile-profession-input-error"></span>
    <button type="submit" className="popup__button">Сохранить</button>  
  </>

const popupEditAvatarContent = 
  <>
    <input type="url" name="avatar" className="popup__input popup__input_type_avatar" id="profile-avatar-input" placeholder="Ссылка на картинку" required/>
    <span className='popup__error popup__error_visible' id="profile-avatar-input-error"></span>
    <button type="submit" className="popup__button">Сохранить</button>  
  </>

const popupDeleteRequestContent = 
  <>
    <button type="submit" className="popup__button">Да</button>
  </>

export {popupAddPlaceContent, popupEditProfileContent, popupEditAvatarContent, popupDeleteRequestContent}